import { Layout } from '@/components/meta'
import { Hero, Presentation, Leadership } from '@/components/sections'
import { TextMarquee } from '@/components/shared'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [stopMove, setStopMove] = useState<boolean>(false)
  const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false
	})

  const theme = inView ? 'light' : 'dark'

  return (
    <Layout stickyHeader={stopMove} theme={theme}>
        <Hero stopMove={stopMove}/>
        <Presentation isTextInScreen={setStopMove}/>
        <TextMarquee speed={1} direction='left' content='Mind the business, we build the product.' theme={theme}/>
        <Leadership  theme={theme}/>
        <div ref={ref}></div>
    </Layout>
  )
}
