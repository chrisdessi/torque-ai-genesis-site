import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('ZAPIER_ASSESSMENT_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('ZAPIER_ASSESSMENT_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ error: 'Webhook not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await req.json();
    console.log('Received assessment submission');

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate question answers are valid values
    const validAnswers = ['1', '2', '3', '4'];
    for (let i = 1; i <= 6; i++) {
      if (!validAnswers.includes(data[`q${i}`])) {
        return new Response(
          JSON.stringify({ error: `Invalid answer for question ${i}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Recalculate score server-side to prevent manipulation
    const score = parseInt(data.q1) + parseInt(data.q2) + parseInt(data.q3) + 
                  parseInt(data.q4) + parseInt(data.q5) + parseInt(data.q6);

    let riskTier = "";
    if (score >= 21) riskTier = "Critical";
    else if (score >= 15) riskTier = "High";
    else if (score >= 9) riskTier = "Moderate";
    else riskTier = "Low";

    // Calculate personalized messages
    const whatThisMeans = riskTier === "Critical" 
      ? "You're likely losing $500K–$5M+ annually through execution drift, rework, and misaligned priorities."
      : riskTier === "High"
      ? "Expect 5–10% of annual revenue to be silently wasted on internal friction, duplication, and context-switching."
      : riskTier === "Moderate"
      ? "You're stable but vulnerable. Small inefficiencies compound quickly without active governance."
      : "You're in good shape, but optimization opportunities remain to future-proof your operations.";

    const recommendedNextStep = riskTier === "Critical"
      ? "Book a 90-minute AI Strategy Workshop to diagnose your highest-impact gaps and build a 90-day roadmap."
      : riskTier === "High"
      ? "Schedule a 90-minute Executive AI Briefing to align leadership and identify quick wins."
      : riskTier === "Moderate"
      ? "Book a 60-minute Strategic Consult to identify optimization opportunities and prevent future drift."
      : "Book a 30-minute Alignment Check-In to review your current state and identify any hidden risks.";

    // Forward to Zapier
    const payload = {
      firstName: data.firstName.slice(0, 100),
      lastName: data.lastName.slice(0, 100),
      email: data.email.slice(0, 255),
      company: data.company.slice(0, 200),
      q1: data.q1,
      q2: data.q2,
      q3: data.q3,
      q4: data.q4,
      q5: data.q5,
      q6: data.q6,
      subject: "Execution Leak",
      executionLeakScore: score,
      riskTier: riskTier,
      whatThisMeans: whatThisMeans,
      recommendedNextStep: recommendedNextStep,
      utmSource: data.utmSource || '',
      utmMedium: data.utmMedium || '',
      utmCampaign: data.utmCampaign || '',
      utmTerm: data.utmTerm || '',
      utmContent: data.utmContent || '',
      timestamp: new Date().toISOString(),
    };

    console.log('Forwarding to Zapier webhook');
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log('Assessment submitted successfully');

    return new Response(
      JSON.stringify({ success: true, score, riskTier }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing assessment:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process assessment' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
