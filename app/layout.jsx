import './globals.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {Analytics} from '@vercel/analytics/react'
import {ThemeProvider} from './providers'

export const metadata = {
  metadataBase: new URL('https://www.egxo.fyi'),
  title: 'egxo.fyi',
  description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ethan_g, eg, EG, ethan-g, egarrisxn, egxo.fyi, ethangarrison, ethan-garrison, ethan_garrison, blog, nextjs, next, next14, sanity, sanityio, shadcn-ui, shadcn/ui, tailwindcss, javascript, react',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EG. | Blog',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    url: 'https://www.egxo.fyi/',
    siteName: 'egxo.fyi',
    images: [
      {
        url: `https://egxo.fyi/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'The opengraph image for egxo.fyi.',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: 'eg__xo',
    site: 'https://x.com/eg__xo',
    title: 'EG. | Blog',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    images: [
      {
        url: `https://egxo.fyi/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'The twitter image for egxo.fyi.',
      },
    ],
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#ffffff'},
    {media: '(prefers-color-scheme: dark)', color: '#0c0a09'},
  ],
}

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
