import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '~/mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

// @ts-ignore
export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = useMDXComponents().wrapper

// @ts-ignore
export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper
      toc={toc}
      metadata={metadata}
    >
      <MDXContent
        {...props}
        params={params}
      />
    </Wrapper>
  )
}
