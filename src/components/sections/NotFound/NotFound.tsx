import dynamic from 'next/dynamic'
import Content from './Content'
import styles from './NotFound.module.scss'

const Scene = dynamic(() => import('@/components/sections/NotFound/Scene'), {
  ssr: false
})

const NotFound = () => (
  <div className={styles.wrapper}>
    <Scene />
    <Content />
  </div>
)

export default NotFound
