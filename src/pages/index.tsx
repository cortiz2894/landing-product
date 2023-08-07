import { Layout } from '@/components/meta'
import { Hero, Presentation } from '@/components/sections'
import { useState } from 'react'

export default function Home() {
  const [stopMove, setStopMove] = useState<boolean>(false)
  console.log('stopMove: ', stopMove)
  return (
    <Layout stickyHeader={stopMove}>
        <Hero stopMove={stopMove}/>
        <Presentation isTextInScreen={setStopMove}/>
    </Layout>
  )
}
