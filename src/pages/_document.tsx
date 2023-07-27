import { Head, Html, Main, NextScript } from 'next/document'
import { SITE_LANG } from '@/utils/constants'
import { Favicons } from '@/components/meta'

function Document() {
  return (
    <Html lang={SITE_LANG}>
      <Head>
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
