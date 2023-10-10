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
    const letter = gsap.utils.toArray(container.querySelectorAll('h2'))      
      let ctx = gsap.context(() => {
      gsap.fromTo(
        letter,
        {
          opacity: 1,
          yPercent: 0
        },
        {
          opacity: 0,
          yPercent: -150,
          stagger: 0.08,
          scrollTrigger: {
            trigger: '#presentationContainer',
            start: () => "top 90%",
            end: () => "top 35%",
            scrub: 0.5
          }
        }
      );
    });

    return () => ctx.revert();
  })
  
  useIsomorphicLayoutEffect(() => {
    const container = $ref.current
    if (!container || !showAnimation ) return
    lenis.start()
    
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
    overwrite: true,
    duration: 1.4,
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

    return (
      <div className={cn(styles.root, styles.loaderActive)}>
        <div className={styles.loadingText} ref={containerText}>
          <h4>Welcome</h4>
          <h4>to</h4>
          <h4>HiKeys</h4>
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
