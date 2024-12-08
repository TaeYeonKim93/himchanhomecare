import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

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
    port: 444  // 443에서 444로 변경
  },
});
