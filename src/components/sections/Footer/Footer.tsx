import Link from 'next/link'
import cn from 'clsx'
import { gsap } from '@/utils/gsap'
// import IconLogo from '@/components/icons/IconLogo'
import styles from './Footer.module.scss'
import { ArrowLink, VisuallyHidden } from '@/components/shared'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { useRef } from 'react'
import KeyboardScene from '@/components/shared/SceneTest/SceneTest'
import Parallax from '../Parallax/Parallax'

type Props = {
  theme?: 'dark' | 'light'
}

const Footer = ({ theme = 'light' }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline(
        // {paused:true}
      )
      // put all your GSAP/ScrollTrigger code inside here!
      gsap.fromTo(
        '.animate-text h3',
        {
          opacity: 0,
          yPercent: 100
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: '.animate-text',
            start: () => "top 75%",
            end: () => "top 35%",
            scrub: 0.5
          }
        }
      );
      gsap.fromTo(
        '.paragraph',
        {
          y: -100,
        },
        {
          y: 0,
          duration: 0.5,
          scrollTrigger: '.foot'
        }
      );
      gsap.fromTo(
        '.border-foot',
        {
          scaleX: '0%',

        },
        {
          scaleX: "100%",
          duration: 0.4,
          scrollTrigger: '.foot'
        }
      );
      gsap.fromTo(
        '.foot li',
        {
          y: -100
        },
        {
          y: 0,
          stagger: 0.5,
          duration: 0.3,
          delay:0.4,
          scrollTrigger: '.foot'
        }
      );

      gsap.set('.animate-text', {
        opacity: 1
      });
    });
    
    return () => ctx.revert(); // <-- cleanup!
  })


  return(
  <div className={cn(styles.root, styles[theme])}>
    <div className={cn("container", styles.containerFlex)}>
      <div className={cn('grid', styles.gridFlex)}>
        <div className='span-10' style={{overflow: 'hidden'}}>
          <p className={cn(styles.textBasic, 'paragraph')}>Relax. We got you.</p>
        </div>
        <div className={cn('span-12')}>
          <div className={cn('animate-text', styles.textAnimation)} ref={ref}>
            <h3 className={styles.bottomLettering}>H</h3>
            <h3 className={styles.bottomLettering}>i</h3>
            <h3 className={styles.bottomLettering}>K</h3>
            <h3 className={styles.bottomLettering}>e</h3>
            <h3 className={styles.bottomLettering}>y</h3>
            <h3 className={styles.bottomLettering}>s</h3>
            <h3 className={styles.bottomLettering}>-</h3>
            <h3 className={styles.bottomLettering}>-</h3>
            <h3 className={styles.bottomLettering}>1</h3>
            <h3 className={styles.bottomLettering}>9</h3>
            <h3 className={styles.bottomLettering}>7</h3>
            <h3 className={styles.bottomLettering}>7</h3>
          </div>
          <div className={styles.canvasFoot}>
            <div className={styles.blurBackdrop}></div>
            <KeyboardScene position={[-Math.PI / -2, 0, 0.4]} autoRotate={true}/>
          </div>
        </div>
        <div className={cn('span-12')}>
          <ul className={cn(styles.socialMedia, 'foot')} >
            <div className={cn(styles.border , 'border-foot')}></div>
            <li className={styles.item}>
              <a href={'/'} className={styles.textBasic}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
              </svg><span>Buenos Aires, Argentina</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href={'/'} className={styles.textBasic}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
                <span>Instagram</span>
              </a>
              </li>
            <li className={styles.item}>
              <a href={'/'} className={styles.textBasic}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                <span>Linkedin</span>
              </a>
            </li>
            <li className={styles.item}>
              <a href={'/'} className={styles.textBasic}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
}

export default Footer
