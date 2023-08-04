import { Layout } from '@/components/meta'
import { Hero, Presentation } from '@/components/sections'
import { useState } from 'react'

export default function Home() {
  const [stopMove, setStopMove] = useState<boolean>(false)
  const [titleRef, setTitleRef] = useState<HTMLDivElement | null>(null)
  return (
    <Layout>
        <Hero stopMove={stopMove} titleRef={titleRef}/>
        <Presentation isTextInScreen={setStopMove} titleReference={setTitleRef}/>
    </Layout>
  )
}
