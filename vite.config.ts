import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/himchan.hopto.org/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/himchan.hopto.org/fullchain.pem'),
    },
    host: true,
    port: 443
  },
});