import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate authorization header contains valid anon key
  const authHeader = req.headers.get('authorization');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  
  if (!authHeader || !anonKey || !authHeader.includes(anonKey)) {
    console.warn('Unauthorized request to fetch-blog-rss');
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const rssUrl = 'https://rss.beehiiv.com/feeds/fl7hNCGWCO.xml';
    const response = await fetch(rssUrl);
    const text = await response.text();

    return new Response(text, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('RSS fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog feed' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
