import { FC, useRef, useState } from 'react'
import cn from 'clsx'
import styles from './Hero.module.scss'
import KeyboardScene  from '../../shared/SceneTest/SceneTest'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap } from '@/utils/gsap'

type Props = {
  stopMove: boolean,
}

const Hero: FC<Props> = ({stopMove}) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<string>('top')
  const [disableModelScroll, setDisableModelScroll] = useState<boolean>(false)
  const $ref = useRef<HTMLDivElement | null>()
  const lenis = useLenis(({ scroll }: { scroll: number }) => {
    setHasScrolled(scroll > 0)
  })

  useIsomorphicLayoutEffect(() => {
    if (!lenis) return    
    lenis?.stop() 
    if(showAnimation === true) {
      lenis?.start() 
      console.log(hasScrolled)
    }
    }, [lenis, hasScrolled, showAnimation])

    //Letters Background Animation
    useIsomorphicLayoutEffect(() => {
      const container = $ref.current
      console.log($ref)
      if (!container) return

      const letter = gsap.utils.toArray(container.querySelectorAll('h2'))
      if(hasScrolled) {
        gsap.timeline()
        .to(letter, {
          translateY: -1000,
          stagger: 0.1,
          ease: '0.48, 0.01, 0.27, 1.00',
          overwrite: true,
          onComplete: () => {
            setShowAnimation(true)
          }
        })
      } else {
        gsap.timeline()
        .to(letter, {
          translateY: 0,
          stagger: 0.3,
          ease: '0.48, 0.01, 0.27, 1.00',
          overwrite: true
        })
      }
    // Check if scroll after Hero
    const checkPassHero = () => {
      if (window.scrollY > (container.offsetTop + container.offsetHeight)) {
        setDisableModelScroll(true)
      }else {
        setDisableModelScroll(false)
      }
    }

    window.addEventListener("scroll", checkPassHero);
    return () => {
      window.removeEventListener("scroll", checkPassHero);

    }
  }, [hasScrolled])

  //Scroll direction
  // useIsomorphicLayoutEffect(() => {
  //   let lastScrollTop = 0;

  //   const scrollDirecion = () => {
  //       var st = window.pageYOffset || document.documentElement.scrollTop; 
  //       if (st > lastScrollTop) {
  //           // downscroll code
  //           setScrollDirection('down')
  //       } else if (st < lastScrollTop) {
  //           // upscroll code
  //           setScrollDirection('up')

  //       } // else was horizontal scroll
  //       lastScrollTop = st <= 0 ? 0 : st; 
  //   }

  //   window.addEventListener("scroll", scrollDirecion, false);

  //   return () => {
  //     removeEventListener("scroll", scrollDirecion)
  //   }

  // }, [])

    return (
      <div className={styles.root}>
        <div className={cn(styles.canvas, !stopMove && !disableModelScroll ? styles.fixed : '')}>
          <KeyboardScene/>
        </div>
        <div className={styles.backgroundText} ref={$ref}>
          <div>
            <h2 className={styles.text}>H</h2>
            <h2 className={styles.text}>K</h2>
          </div>
          <div>
            <h2 className={styles.text}>7</h2>
            <h2 className={styles.text}>7</h2>
          </div>
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
