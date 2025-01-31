import './globals.css'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'
import {ThemeProvider} from './providers'

const geist = Geist({
  subsets: ['latin'],
  variable: '--geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--geist-mono',
})

export const metadata = {
  metadataBase: new URL('https://www.egxo.fyi'),
  title: {
    template: 'egxo.fyi | %s',
    default: 'egxo.fyi',
  },
  description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ethan_g, eg, EG, ethan-g, egarrisxn, egxo.fyi, ethangarrison, ethan-garrison, ethan_garrison, blog, nextjs, next, next14, sanity, sanityio, shadcn-ui, shadcn/ui, tailwindcss, javascript, react',
  ],
  creator: 'https://egxo.dev.',
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'egxo.dev',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    url: 'https://www.egxo.fyi/',
    siteName: 'egxo.fyi',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'My opengraph image for the latest blog post',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'egxo.dev',
    description: 'SPEND A LITTLE TIME INSIDE MY HEAD.',
    creator: '@eg__xo',
    site: '@eg__xo',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'My twitter image for the latest blog post',
      },
    ],
  },
  icons: {
    icon: [
      {url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon'},
      {url: '/icon.png', sizes: '96x96', type: 'image/png'},
      {url: '/icon.svg', type: 'image/svg+xml'},
    ],
    apple: [{url: '/apple-icon.png', sizes: '180x180', type: 'image/png'}],
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
    <html lang='en' suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className='overflow-x-hidden overscroll-none scroll-smooth antialiased'>
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
