import Link from 'next/link'
import cn from 'clsx'
import { gsap } from '@/utils/gsap'
// import IconLogo from '@/components/icons/IconLogo'
import styles from './Footer.module.scss'
import { ArrowLink, VisuallyHidden } from '@/components/shared'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

type Props = {
  theme: 'dark' | 'light'
}

const Footer = ({ theme = 'dark' }: Props) => {
  useIsomorphicLayoutEffect(() => {

  }, [])


  return(
  <div className={cn(styles.root, styles[theme])}>
    <div className="container">
      <div className='grid'>
        <div className='span-10'>
          <p>Relax. We got you.</p>
        </div>
        <div className='span-2'>
          <ul className={styles.socialMedia}>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
        <div className='span-12'>
          <div className='animate-text'>
            <h3 className={styles.bottomLettering}>H</h3>
            <h3 className={styles.bottomLettering}>i</h3>
            <h3 className={styles.bottomLettering}>K</h3>
            <h3 className={styles.bottomLettering}>e</h3>
            <h3 className={styles.bottomLettering}>y</h3>
            <h3 className={styles.bottomLettering}>-</h3>
            <h3 className={styles.bottomLettering}>-</h3>
            <h3 className={styles.bottomLettering}>1</h3>
            <h3 className={styles.bottomLettering}>9</h3>
            <h3 className={styles.bottomLettering}>7</h3>
            <h3 className={styles.bottomLettering}>7</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Footer
