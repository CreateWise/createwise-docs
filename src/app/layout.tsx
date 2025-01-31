import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'
import { Logo } from '~/components/logo'
import '~/styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - CreateWise',
  },
  description: 'CreateWise: the Next.js site builder',
  applicationName: 'CreateWise',
  generator: 'Next.js',
  appleWebApp: {
    title: 'CreateWise',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://nextra.site',
  },
}

export default async function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html
      lang='en'
      dir='ltr'
      suppressHydrationWarning
    >
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='createwise'>CreateWise</Banner>}
          navbar={<Navbar logo={<Logo />} />}
          footer={<Footer />}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/shuding/nextra/blob/main/examples/docs'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
