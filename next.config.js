
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://lh3.googleusercontent.com',
        port: '',
        pathname: '/a/',
      },

      {
        protocol: 'https',
        hostname: 'https://cdn.discordapp.com',
        port: '',
        pathname: '/avatars/',
      },
    ],
  },
  dest: "public",
  register: true,
  skipWaiting: true,
})
