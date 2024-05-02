export const PWAConfig = {
  includeAssets: [
    'favicon.svg',
    'favicon.ico',
    'robots.txt',
    'apple-touch-icon.png',
  ],
  manifest: {
    registerType: 'autoUpdate',
    name: 'Waffle',
    short_name: 'Waffle',
    description: '해시태그 추천 서비스',
    theme_color: '#ffffff',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    icons: [
      {
        src: '/public/icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/public/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/public/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/public/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
  workbox: {
    sourcemap: true,
  },
};
