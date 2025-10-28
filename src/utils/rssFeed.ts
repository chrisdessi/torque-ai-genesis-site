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
    const response = await fetch('https://rss.beehiiv.com/feeds/fl7hNCGWCO.xml');
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
      
      // Extract image from content if available
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      const imgElement = tempDiv.querySelector('img');
      const image = imgElement?.src || '/lovable-uploads/85521d42-7840-4d81-b8ca-c002ab15932e.png';
      
      // Create excerpt from content
      const textContent = tempDiv.textContent || '';
      const excerpt = textContent.substring(0, 200).trim() + '...';
      
      // Create slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      
      posts.push({
        id: `rss-${index + 1}`,
        title,
        excerpt,
        content,
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
  } catch (error) {
    console.error('Error fetching blog feed:', error);
    return [];
  }
};
