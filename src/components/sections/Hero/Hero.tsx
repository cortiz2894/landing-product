import { FC } from 'react'
import cn from 'clsx'
import styles from './Hero.module.scss'
import KeyboardScene  from '../../shared/SceneTest/SceneTest'

type Props = {

}

const Hero: FC<Props> = () => {
    return (
      <div className={styles.root}>
        <KeyboardScene />
        <div className={styles.backgroundText}>
          <h2 className={styles.text}>HK</h2>
          <h2 className={styles.text}>77</h2>
        </div>
        <div className={styles.backgroundLayout}>
          <div className='container'>
            <div className={styles.item}>
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Hero 
