import Link from 'next/link'
import cn from 'clsx'
import { gsap } from '@/utils/gsap'
// import IconLogo from '@/components/icons/IconLogo'
import styles from './Footer.module.scss'
import { ArrowLink, VisuallyHidden } from '@/components/shared'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { useRef } from 'react'

type Props = {
  theme: 'dark' | 'light'
}

const Footer = ({ theme = 'dark' }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
            trigger: '.animtext',
            start: "top 75%",
            end: "top 40%",
            scrub: 0.5,
            markers: true
          }
        }
      );
      gsap.set('.animate-text', {
        opacity: 1
      });
    });
    
    return () => ctx.revert(); // <-- cleanup!
  }, [])


  return(
  <div className={cn(styles.root, styles[theme], 'start-footer-animation')}>
    <div className="container">
      <div className='grid'>
        <div className='span-10'>
          <p className={styles.textBasic}>Relax. We got you.</p>
        </div>
        <div className='span-2 animtext'>
          <ul className={styles.socialMedia}>
            <li><a href={'/'} className={styles.textBasic}>Instagram</a></li>
            <li><a href={'/'} className={styles.textBasic}>Linkedin</a></li>
            <li><a href={'/'} className={styles.textBasic}>Github</a></li>
          </ul>
        </div>
        <div className={cn('span-12')}>
          <div className={cn('animate-text', styles.textAnimation)} ref={ref}>
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
