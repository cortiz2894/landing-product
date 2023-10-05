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
  const [disableModelScroll, setDisableModelScroll] = useState<boolean>(false)
  const $ref = useRef<HTMLDivElement | null>(null)
  const containerText = useRef<HTMLDivElement | null>(null)
  const lenis = useLenis(({ scroll }: { scroll: number }) => {
    setHasScrolled(scroll > 0)
  })

  useIsomorphicLayoutEffect(() => {
    if (!lenis || showAnimation ) return
    lenis?.stop() 
  }, [hasScrolled])
  
  //Letters Background Animation
  useIsomorphicLayoutEffect(() => {
    const container = $ref.current
    if (!container || !showAnimation ) return
    console.log('lenis start')
    lenis.start()

    const letter = gsap.utils.toArray(container.querySelectorAll('h2'))
    
    if(hasScrolled) {
      gsap.timeline()
      .to(letter, {
        translateY: -1000,
        stagger: 0.1,
        opacity: 0,
        ease: '0.48, 0.01, 0.27, 1.00',
        overwrite: true,
      })
    } else {
      gsap.timeline()
      .to(letter, {
        translateY: 0,
        stagger: 0.3,
        opacity: 1,
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
  }, [showAnimation, hasScrolled])

//loading text animation
useIsomorphicLayoutEffect(() => {
  const tl = gsap.timeline()
  const container = $ref.current
  const textRef = containerText.current
  if (!container || !textRef) return

  const letter = gsap.utils.toArray(container.querySelectorAll('h2'))
  //Loading animation
  const itemText = gsap.utils.toArray(textRef.querySelectorAll('h4'))

  tl.to(itemText, {
    opacity: 1,
    stagger: 0.3,
    x: -30,
    ease: '0.7, 0.7, 0.7, 0.7',
    // ease: Back.easeOut.config(1.7),
    overwrite: true,
    duration: 1.4,
    // onComplete: () => {
    //   tl.reverse()
    // }
  })
  .to(textRef, {
    x: -60,
    duration: 0.4,
  })
  .to(itemText, {
    stagger: 0.2,
    duration: 0.6,
    opacity: 0,
    ease: "power2.inOut",
  }, '<')
  .to(letter, {
    // stagger: 0.1,
    stagger: 0.05,
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.inOut",
  }, '>-0.5')
  .to('.gltb-canvas', {
    opacity: 1,
    translateY: 0,
    ease: "power2.inOut",
    duration: 0.5,
  },'>-0.2')
  .to('.lineBackground', {
    stagger: 0.15,
    opacity: 1,
    left: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => { setShowAnimation(true )}
  },'>-0.5')
}, [])

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
      <div className={cn(styles.root, styles.loaderActive)}>
        <div className={styles.loadingText} ref={containerText}>
          <h4>Random</h4>
          <h4>text</h4>
          <h4>loading</h4>
        </div>
        <div className={cn(styles.canvas, !stopMove && !disableModelScroll ? styles.fixed : '', 'gltb-canvas')}>
          <KeyboardScene isHome={true}/>
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
            <article className={cn(styles.item, 'lineBackground')} >
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </article>
            <article className={cn(styles.item, 'lineBackground')} >
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </article>
            <article className={cn(styles.item, 'lineBackground')} >
              <div className={styles.cross}></div>
              <div className={styles.line}></div>
              <div className={styles.cross}></div>
            </article>
          </div>
        </div>
      </div>
    )
}

export default Hero 
