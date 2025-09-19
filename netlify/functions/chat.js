// netlify/functions/chat.js
// Netlify Functions (Node 18+). Uses global fetch.
exports.handler = async (event) => {
  // Handle CORS preflight
  const ALLOWED_ORIGIN = 'https://pathpharm-app.netlify.app'; // <-- replace with your frontend origin if different
  const corsHeaders = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        body: JSON.stringify({ error: 'OpenAI API key not configured in environment' })
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const { messages, model = 'gpt-4o-mini', temperature = 0.7, max_tokens = 1000 } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        body: JSON.stringify({ error: 'Request must include a messages array' })
      };
    }

    // Call OpenAI Chat Completions endpoint
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens
      })
    });

    const text = await openaiRes.text();
    if (!openaiRes.ok) {
      // Forward the error from OpenAI
      return {
        statusCode: openaiRes.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        body: JSON.stringify({ error: text })
      };
    }

    const data = JSON.parse(text);
    const botText = data?.choices?.[0]?.message?.content ?? null;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
      body: JSON.stringify({ botText, data })
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
      body: JSON.stringify({ error: err.message || 'Internal Server Error' })
    };
  }
};
