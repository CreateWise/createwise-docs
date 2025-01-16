import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style-prefixed.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "...",
  description: "...",
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <></>;
const navbar = (
  <Navbar
    logo={<b>CreateWise</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © CreateWise.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
