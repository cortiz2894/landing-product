import { Layout } from '@/components/meta'
import { Hero, Presentation, Leadership, Parallax } from '@/components/sections'
import { TextMarquee } from '@/components/shared'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [stopMove, setStopMove] = useState<boolean>(false)
  const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false
	})

  return (
    <Layout stickyHeader={stopMove}>
        <Hero stopMove={stopMove}/>
        <Presentation isTextInScreen={setStopMove}/>
        <TextMarquee content='Mind the business, we build the product.' theme={inView ? 'light' : 'dark'}/>
        <Leadership  theme={inView ? 'light' : 'dark'}/>
        <footer ref={ref} style={{minHeight: '40vh'}}>FOOTER</footer>
    </Layout>
  )
}
