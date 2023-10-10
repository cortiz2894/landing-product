import Head from 'next/head'
import { useRouter } from 'next/router'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import  { ArrowLink, CursorDistorsion } from '@/components/shared'
import { Header, Footer } from '@/components/sections'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/utils/constants'
import { Theme } from '@/utils/types'
import { useInView } from 'react-intersection-observer'

type Meta = {
  title: string | null
  description: string | null
  image?: string | null
  url?: string | null
}

type Props = {
  meta?: Meta
  children: React.ReactNode
  theme?: Theme
  stickyHeader: boolean 
}

const Layout = ({ meta, children, theme = 'dark', stickyHeader }: Props) => {
  const { asPath, events } = useRouter()
  const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false
	})

  const isContact = asPath === '/contact'
  const isPrivacy = asPath === '/privacy-policy'

  const lenis = useLenis(() => {})

  useIsomorphicLayoutEffect(() => {
    function onHashChangeStart(url: string) {
      if (url.includes('#')) {
        const anchor = '#' + url.split('#').pop()
        lenis.scrollTo(anchor === '#' ? 'body' : anchor, { offset: -90 })
      }
    }

    events.on('hashChangeStart', onHashChangeStart)

    return () => {
      events.off('hashChangeStart', onHashChangeStart)
    }
  }, [lenis])

  // Metadata
  const image = meta?.image || `/cover.jpg`
  const title = meta?.title || SITE_NAME
  const url = meta?.url || `${SITE_URL}${asPath}`
  const description = meta?.description || SITE_DESCRIPTION

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {image && (
          <meta
            property="og:image"
            content={
              image.startsWith('https://') ? image : `${SITE_URL}${image}`
            }
          />
        )}
      </Head>

      <Lenis root>
        <CursorDistorsion />
        <Header stickyHeader={stickyHeader} theme={inView ? 'light' : 'dark'} footerAppear={inView}/>
        <main>
          {children}
        </main>
        <div ref={ref}>
          <Footer 
          // theme={inView ? 'light' : 'dark'} 
          />
        </div>
      </Lenis>
    </>
  )
}

export default Layout
