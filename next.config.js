/** @type {import('next').NextConfig} */
module.exports = {
  
  reactStrictMode: true,
  experimental: {},
  env: {
    OPENAI_API_KEY: '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',
    GOOGLE_CLIENT_ID:
      '833345774603-3pondr11uqoj3rfhv9nh0m31hitqivlk.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    GOOGLE_API_KEY: 'AIzaSyC0jcq6RW0WNuyE3jTmSx-b-4g7DUR9F7c',
    NEXTAUTH_URL: 'https://chat.nestech-ai.com',
    NEXTAUTH_SECRET: 'YEfFAYPE7HljOU4aXarP7gsc/FQJWJnH/XwnemuN7e0=',
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
    KVVV_URL:
      'redis://default:a8cae0620151437dbe51a7cadcb6831a@immune-bison-48459.kv.vercel-storage.com:48459',
    KVVV_REST_API_URL: 'https://immune-bison-48459.kv.vercel-storage.com',
    KVVV_REST_API_TOKEN:
      'Ab1LASQgYzkxNDEwMGQtZmNlNS00YmE2LThlNWMtMWZiNjQ5MzhkZWY0YThjYWUwNjIwMTUxNDM3ZGJlNTFhN2NhZGNiNjgzMWE=',
    KVVV_REST_API_READ_ONLY_TOKEN:
      'Ar1LASQgYzkxNDEwMGQtZmNlNS00YmE2LThlNWMtMWZiNjQ5MzhkZWY0nchOZs_3eK2XKnGuHfDgpoEUueK-fgBq8r_78OepFXo=',
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
