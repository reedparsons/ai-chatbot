/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  env: {
    OPENAI_API_KEY: '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',
    GOOGLE_CLIENT_ID: '833345774603-3pondr11uqoj3rfhv9nh0m31hitqivlk.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'YEfFAYPE7HljOU4aXarP7gsc/FQJWJnH/XwnemuN7e0=',
    OPENAI_API_KE: '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',
    AUTH_GITHUB_ID: '1dc8455c3b242540fe13',
    AUTH_GITHUB_SECRET: '80684574f046e1c000522d5636b38692e686828f',
    AUTH_SECRET: 'f99d67e5009e7709245c6b9090138eb3',
    KV_URL:
      'redis://default:ceac27ad7e974342939d72014113844a@diverse-mustang-46042.kv.vercel-storage.com:46042',
    KV_REST_API_URL: 'https://diverse-mustang-46042.kv.vercel-storage.com',
    KV_REST_API_TOKEN:
      'AbPaASQgYmY5NWZlYWUtMWNiMC00OGQ0LWFlZWQtZDFkMzc5OGMwYmQwY2VhYzI3YWQ3ZTk3NDM0MjkzOWQ3MjAxNDExMzg0NGE=',
    KV_REST_API_READ_ONLY_TOKEN:
      'ArPaASQgYmY5NWZlYWUtMWNiMC00OGQ0LWFlZWQtZDFkMzc5OGMwYmQw8Sx-mckp0BD1rVZK85igteSVdWMWuRjEOE27m1ztoeg=',
    VERCEL: '6Bc5IcwNcgJLr5Ayo529wFgr'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}
