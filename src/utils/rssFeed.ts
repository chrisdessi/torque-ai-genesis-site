import DOMPurify from 'dompurify';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  image: string;
}

export const fetchBlogFeed = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-blog-rss`, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
      }
    });
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    
    const items = xml.querySelectorAll('item');
    const posts: BlogPost[] = [];
    
    items.forEach((item, index) => {
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const content = item.querySelector('content\\:encoded, encoded')?.textContent || description;
      
      // Sanitize content immediately before DOM manipulation to prevent XSS
      const sanitizedContent = DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ['p', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'strong', 'em', 'br', 'div', 'span', 'blockquote', 'pre', 'code'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'title', 'target', 'rel'],
        ALLOW_DATA_ATTR: false
      });
      
      // Extract image from content if available
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = sanitizedContent;
      
      // Remove Beehiiv CSS code snippets that appear as text
      const textNodes = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null);
      const nodesToRemove: Node[] = [];
      while (textNodes.nextNode()) {
        const node = textNodes.currentNode;
        if (node.textContent && (
          node.textContent.includes('.bh__table') ||
          node.textContent.includes('border: 1px solid') ||
          node.textContent.match(/\.\w+\s*\{[\s\S]*?\}/)
        )) {
          nodesToRemove.push(node);
        }
      }
      nodesToRemove.forEach(node => node.parentNode?.removeChild(node));
      
      // Remove style tags
      tempDiv.querySelectorAll('style').forEach(el => el.remove());
      
      const imgElement = tempDiv.querySelector('img');
      const image = imgElement?.src || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop';
      
      // Create excerpt from content
      const textContent = tempDiv.textContent || '';
      const excerpt = textContent.substring(0, 200).trim() + '...';
      
      // Add internal blog links to first paragraph
      const firstParagraph = tempDiv.querySelector('p');
      if (firstParagraph && index < 3) {
        // Get other posts to link to (avoid linking to self)
        const otherPosts = Array.from(items)
          .map((item, idx) => {
            const postTitle = item.querySelector('title')?.textContent || '';
            const postSlug = postTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');
            return { title: postTitle, slug: postSlug, index: idx };
          })
          .filter(p => p.index !== index)
          .slice(0, 3);
        
        // Add links naturally within the first paragraph
        if (otherPosts.length >= 3 && firstParagraph.textContent) {
          const originalText = firstParagraph.innerHTML;
          const linkTexts = [
            'AI transformation strategies',
            'latest AI insights',
            'enterprise AI implementation'
          ];
          
          let modifiedText = originalText;
          otherPosts.slice(0, 3).forEach((post, linkIdx) => {
            if (linkIdx < linkTexts.length) {
              const linkHtml = `<a href="/blog/${post.slug}" class="text-primary hover:underline font-medium">${linkTexts[linkIdx]}</a>`;
              // Insert link naturally in the text if possible
              if (linkIdx === 0 && !modifiedText.includes('<a')) {
                modifiedText = modifiedText.replace(/\b(AI|artificial intelligence)\b/i, linkHtml);
              } else if (linkIdx === 1 && modifiedText.split('<a').length < 2) {
                modifiedText = modifiedText.replace(/\b(insights?|strategies?|approaches?)\b/i, linkHtml);
              } else if (linkIdx === 2 && modifiedText.split('<a').length < 3) {
                modifiedText = modifiedText.replace(/\b(implementation|transformation|adoption)\b/i, linkHtml);
              }
            }
          });
          
          firstParagraph.innerHTML = modifiedText;
        }
      }
      
      // Get the modified content with internal links
      const modifiedContent = tempDiv.innerHTML;
      
      // Create slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      
      posts.push({
        id: `rss-${index + 1}`,
        title,
        excerpt,
        content: modifiedContent,
        author: 'Christopher Dessi',
        date: new Date(pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        category: 'AI Insights',
        slug,
        image
      });
    });
    
    return posts;
  } catch {
    // Error handled silently - return empty array
    return [];
  }
};
