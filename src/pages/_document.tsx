import { Head, Html, Main, NextScript } from 'next/document'
import { SITE_LANG } from '@/utils/constants'

function Document() {
  return (
    <Html lang={SITE_LANG}>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
