export const PWAConfig = {
  includeAssets: [
    'favicon.svg',
    'favicon.ico',
    'robots.txt',
    'apple-touch-icon.png',
  ],
  manifest: {
    name: 'Waffle',
    short_name: 'Waffle',
    description: 'AI Recommendation Engine',
    theme_color: '#ffffff',
    start_url: '/',
    scope: '/',
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
        src: '/public/icon-196x196.png',
        sizes: '196x196',
        type: 'image/png',
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
