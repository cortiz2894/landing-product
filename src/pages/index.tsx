import { Layout } from '@/components/meta'
import { Hero, Presentation, Leadership, Parallax } from '@/components/sections'
import { TextMarquee } from '@/components/shared'

import { useState } from 'react'

export default function Home() {
  const [stopMove, setStopMove] = useState<boolean>(false)
  console.log('stopMove: ', stopMove)
  return (
    <Layout stickyHeader={stopMove}>
        <Hero stopMove={stopMove}/>
        <Presentation isTextInScreen={setStopMove}/>
        <TextMarquee content='This text will be infinite looping'/>
        <Leadership />
        {/* <Parallax /> */}
    </Layout>
  )
}
