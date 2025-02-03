import Script from 'next/script'

export const Analytics = () => {
  return (
    <>
      {/* Umami Analytics */}
      <Script
        defer
        src='https://umami.createwise.ai/script.js'
        data-website-id='f3b98deb-8fea-4132-898a-9e2f6b220d27'
      />
    </>
  )
}
