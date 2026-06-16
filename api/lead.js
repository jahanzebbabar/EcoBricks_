// Proxy endpoint to forward lead submissions to the Google Apps Script
// This ensures proper CORS headers and handles preflight requests.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body || {};
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyPkgVDQXZ7JowJlC038jJWcJVPga_qkqj1dpvqc7ZWq-uPmfyiWfsh_H0518brvPvwPQ/exec';

    const r = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const text = await r.text();
    res.status(r.ok ? 200 : 502).send(text);
  } catch (err) {
    console.error('lead proxy error', err);
    res.status(500).json({ error: 'Proxy error' });
  }
}
