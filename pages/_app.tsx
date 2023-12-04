import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  )
}

export default MyApp
