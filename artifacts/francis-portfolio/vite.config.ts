import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const basePath = process.env.BASE_PATH || '/';

function vercelApiProxyPlugin(): Plugin {
  return {
    name: 'vercel-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/vercel/projects', async (_req, res) => {
        const token = process.env.VERCEL_API_TOKEN;
        if (!token) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ configured: false, projects: [] }));
          return;
        }

        try {
          const vercelRes = await fetch('https://api.vercel.com/v9/projects', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!vercelRes.ok) {
            const errText = await vercelRes.text();
            res.statusCode = vercelRes.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ configured: true, error: errText }));
            return;
          }

          const data = await vercelRes.json();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ configured: true, projects: data.projects || [] }));
        } catch (error: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ configured: true, error: error.message }));
        }
      });
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    vercelApiProxyPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
