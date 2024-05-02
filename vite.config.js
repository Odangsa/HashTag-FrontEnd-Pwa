import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { PWAConfig } from './src/lib/config';

// 개발 환경에서는 PWA 플러그인을 적용하지 않음
const applyPWAInProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react(), applyPWAInProduction ? VitePWA(PWAConfig) : []],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://52.79.178.162:8080', // 실제 API 서버 주소
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
