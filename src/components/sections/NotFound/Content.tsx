import styles from './NotFound.module.scss'
import { ArrowLink } from '@/components/shared'

const Content = () => (
  <div className={styles.content}>
    <div className="container">
      <div className={styles.inner}>
        <h1 className="indent">
          Not all those who wander are lost, but you are, this URL doesn’t exist
        </h1>
      </div>
      <div className="grid">
        <div className="span-8 start-5 span-sm-6 start-sm-7">
          <ArrowLink href="/" variant="block" className="h3">
            Take me to Home
          </ArrowLink>
        </div>
      </div>
    </div>
  </div>
)

export default Content
