export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: 'https://egxo.fyi/sitemap.xml',
    host: 'http://egxo.fyi',
  }
}
