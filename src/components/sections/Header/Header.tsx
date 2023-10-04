import styles from './Header.module.scss'
// import IconLogo from '@/components/icons/IconLogo'
import Link from 'next/link'
import cn from 'clsx'
import { FC, useState,useRef } from 'react'
import { Theme } from '@/utils/types'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import activeHover from '@/utils/text_hover_effect'
import { gsap } from '@/utils/gsap'

type Props = { 
  theme: Theme,
  stickyHeader: boolean,
  footerAppear: boolean
}

const Header: FC<Props> = ({stickyHeader = false, theme = 'dark', footerAppear}) => {

  const [fixedHeader, setFixedHeader] = useState(false)
  const $ref = useRef<HTMLDivElement | null>(null)
  const [animateHeader, setAnimateHeader] = useState(false)
  useIsomorphicLayoutEffect(() => {
    if(!$ref.current) return
    gsap.to($ref.current, {
      top:0,
      duration: 0.6,
      delay: 3, 
      ease: '0.48, 0.01, 0.27, 1.00',
    })
    activeHover()
      // Check if scroll after Hero
      const checkPassHero = () => {
        if (window.scrollY > (window.innerHeight + 100)) {
          setFixedHeader(true)
          setTimeout(() => {
            setAnimateHeader(true)
          }, 500)
        } else {
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
    <div ref={$ref} className={cn(styles.root, stickyHeader || fixedHeader ? styles.fixed : '', animateHeader ? styles.animateFix : '', styles[theme], footerAppear ? styles.forceHide : '')}>
      <div className="container">
          <div className="grid">
            <div className='span-12'>
              <header>
                <nav className={cn(styles.nav)}>
                  <div className='grid'>
                    <div className='span-4'>
                      <div className={cn(styles.logo, 'text-hover-effect')}>
                        <Link href="/">
                          HiKeys―1977
                        </Link>
                      </div>
                    </div>
                    <div className='span-4 start-9 d-flex items-center'>
                      <div className={styles.infoHeader}>
                        <p className={styles.copy}>Embracing the legacy of sound exquisitely designed for tomorrow. </p>
                        <Link className={cn(styles.button, 'text-hover-effect')} href='/'>Let me know</Link>
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
