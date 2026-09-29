export default async function handler(req: any, res: any) {
  const token = process.env.VERCEL_API_TOKEN;
  if (!token) {
    return res.status(200).json({ configured: false, projects: [] });
  }

  try {
    const vercelRes = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!vercelRes.ok) {
      const errText = await vercelRes.text();
      return res.status(vercelRes.status).json({ configured: true, error: errText });
    }

    const data = await vercelRes.json();
    return res.status(200).json({ configured: true, projects: data.projects || [] });
  } catch (error: any) {
    return res.status(500).json({ configured: true, error: error.message });
  }
}
