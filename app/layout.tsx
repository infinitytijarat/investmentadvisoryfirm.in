import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ScrollToTopWrapper } from '@/components/scroll-to-top-wrapper'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

export const metadata: Metadata = {
  title: 'Investment Advisory Firm',
  description: 'Professional investment advisory services',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
body {
  max-width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
}
        `}</style>
      </head>
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <ScrollToTopWrapper>{children}</ScrollToTopWrapper>
        <WhatsAppButton phoneNumber="+918828792729" />
      </body>
    </html>
  )
}
