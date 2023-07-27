import Head from 'next/head'
import { Header, NotFound } from '@/components/sections'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page not found 404</title>
      </Head>

      <Header />
      <NotFound />
    </>
  )
}
