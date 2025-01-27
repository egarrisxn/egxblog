import './globals.css'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {ThemeProvider} from './providers'

const geist = Geist({
  subsets: ['latin'],
  variable: '--geist',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
});

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
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: 'egxo.dev',
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
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: 'egxo.dev',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    creator: "@eg__xo",
    site: '@eg__xo',
    images: [
      {
        url: `https://egxo.fyi/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'The twitter image for egxo.fyi.',
      },
    ],
  },
    icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
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
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className='antialiased scroll-smooth overscroll-none overflow-x-hidden'>
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
