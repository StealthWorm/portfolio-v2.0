import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'Thierry Dev Portfolio',
  description: 'Frontend Developer specializing in React, Next.js, and modern web technologies. Building innovative and user-friendly web applications.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Thierry' }],
  creator: 'Thierry',
  publisher: 'Thierry',
  robots: 'index, follow',
  openGraph: {
    title: 'Thierry Dev Portfolio',
    description: 'Frontend Developer specializing in React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thierry Dev Portfolio',
    description: 'Frontend Developer specializing in React, Next.js, and modern web technologies.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#242424',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/src/styles/fonts/Valorax-lg25V.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//cdn3.iconfinder.com" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />

        {/* Security headers */}
        <meta name="google-site-verification" content="5gpax7FNKo7HCnu0GBEqze0Ji_uWxzRKKU3seT9dWrU" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
