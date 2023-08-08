import { useRouter } from 'next/router'

import { Layout } from '@/components/meta'


export default function Home() {
  const { pathname } = useRouter()

  return (
    <Layout
      theme="goldy"
      meta={{
        title: 'Contact',
        description: 'Contact Page'
      }}
    >
    
    </Layout>
  )
}
