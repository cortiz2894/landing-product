import styles from './Header.module.scss'
// import IconLogo from '@/components/icons/IconLogo'
import Link from 'next/link'
import cn from 'clsx'
import { FC, useState } from 'react'
import { Theme } from '@/utils/types'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

type Props = { 
  theme?: Theme,
  stickyHeader: boolean
}

const Header: FC<Props> = ({stickyHeader = false}) => {

  const [fixedHeader, setFixedHeader] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)
  useIsomorphicLayoutEffect(() => {

      // Check if scroll after Hero
      const checkPassHero = () => {
        if (window.scrollY > (window.innerHeight)) {
          setFixedHeader(true)
          setTimeout(() => {
            setAnimateHeader(true)
          }, 500)
        }else {
          setFixedHeader(false)
          setAnimateHeader(false)
        }
      }
  
      window.addEventListener("scroll", checkPassHero);
      return () => {
        window.removeEventListener("scroll", checkPassHero);
  
      }
    }, [])

  return (
    <div className={cn(styles.root, stickyHeader || fixedHeader ? styles.fixed : '', animateHeader ? styles.animateFix : '')}>
      <div className="container">
          <div className="grid">
            <div className='span-12'>
              <header>
                <nav className={cn(styles.nav)}>
                  <div className='grid'>
                    <div className='span-4'>
                      <div className={styles.logo}>
                        <Link href="/">
                          HiKeys―1977
                        </Link>
                      </div>
                    </div>
                    <div className='span-4 start-9 d-flex items-center'>
                      <div className={styles.infoHeader}>
                        <p className={styles.copy}>Embracing the legacy of sound exquisitely designed for tomorrow. </p>
                        <Link className={styles.button} href='/'>Let me know</Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
