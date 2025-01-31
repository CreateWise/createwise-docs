import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'
import { Logo } from '~/components/logo'
import '~/styles/globals.css'
import type { Locale } from '~/i18n/config'
import { getDictionary } from '~/i18n/routing'

export const metadata = {
  metadataBase: new URL('https://createwise.ai'),
  favicon: '/favicon.ico',
  title: {
    template: '%s - CreateWise',
  },
  description: 'CreateWise Docs',
}

export default async function RootLayout({
  children,
  params,
}: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params

  const dict = await getDictionary(lang as Locale)
  const pageMap = await getPageMap(`/${lang}`)

  const banner = () => {
    return (
      <Banner storageKey='1.0-beta'>
        <div className=''>
          <a
            href='https://createwise.ai'
            target='_blank'
            rel='noreferrer'
          >
            🎉 CreateWise 1.0 beta is released. Read more →
          </a>
        </div>
      </Banner>
    )
  }

  const navbar = () => {
    return (
      <Navbar
        logo={<Logo />}
        chatLink='https://discord.gg/p7kWbxDx'
      />
    )
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          banner={banner()}
          navbar={navbar()}
          footer={<Footer />}
          docsRepositoryBase='https://github.com/CreateWise/createwise-docs'
          editLink={dict.editPage}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
          lastUpdated={<LastUpdated>{dict.lastUpdated}</LastUpdated>}
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'zh', name: '简体中文' },
          ]}
          themeSwitch={{
            dark: dict.dark,
            light: dict.light,
            system: dict.system,
          }}
          nextThemes={{ defaultTheme: 'system' }}
          feedback={{
            content: dict.feedback,
            labels: '',
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
