'use client'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'


import { FooterText } from '@/components/footer'


import '../styles/globals.css'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Viewport } from 'next'
 
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}
export const metadata = {
  metadataBase: new URL(`https://nestech-ai.com`),
  title: {
    default: 'AI Chatbot',
    template: `%s - AI Chatbot`
  },
  description: 'A NesTech-AI powered chatbot built with OpenAI, Next.js and Vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}


interface RootLayoutProps {
  children: React.ReactNode
}
import   NextAuthProvider from '@/components/provider';

export default function RootLayout({
  children }: RootLayoutProps ) {


  
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
        >
        <NextAuthProvider> 
        <Toaster />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* @ts-ignore */}
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          <TailwindIndicator />
            </Providers>
            </NextAuthProvider>
      </body>
      </html>
      </>
  )
}