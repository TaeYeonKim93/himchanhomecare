import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // 개발 모드 확인 강화
  const isProduction = mode === 'production';
  
  // 프로덕션 전용 SSL 설정
  const productionServer = isProduction ? {
    https: {
      key: fs.readFileSync(
        path.resolve('/etc/letsencrypt/live/himchan.hopto.org/privkey.pem'),
        'utf8'
      ),
      cert: fs.readFileSync(
        path.resolve('/etc/letsencrypt/live/himchan.hopto.org/fullchain.pem'),
        'utf8'
      )
    },
    host: true,
    port: 444,
    strictPort: true
  } : {};

  return {
    plugins: [react()],
    server: {
      ...(!isProduction && { 
        host: 'localhost',
        port: 3000,
        strictPort: true
      }),
      ...productionServer
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: env.VITE_ENABLE_SOURCEMAP === 'true'
    }
  };
});
