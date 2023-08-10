import { FC, useRef, useState } from 'react'
import cn from 'clsx'
import styles from './Leadership.module.scss'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap } from '@/utils/gsap'
import { useInView } from 'react-intersection-observer'

type Props = {
//   stopMove: boolean,
}

const Leadership: FC<Props> = ({}) => {
    const $ref = useRef<HTMLDivElement>(null)
    const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.3,
		triggerOnce: true
	})

    useIsomorphicLayoutEffect( ()=> {
        const container = $ref.current
        if (!container) return

        const item = gsap.utils.toArray(container.querySelectorAll('article'))

        if(inView) {
            gsap.timeline()
    
            .to(item, {
              opacity: 1,
              stagger: 0.5,
              ease: '0.48, 0.01, 0.27, 1.00',
              overwrite: true,
            //   onComplete: () => {
            //     setShowAnimation(true)
            //   }
            })
        }

    }, [inView])

    return (
      <div className={styles.root} ref={ref}>
        <div className={styles.backgroundLayout}>
          <div className='container'>
            <div className='grid' ref={$ref}>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth1.png' />
                        <div className={styles.cross}></div>
                        <div className={styles.line}></div>
                        <div className={styles.cross}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth2.png' />
                        <div className={styles.cross}></div>
                        <div className={styles.line}></div>
                        <div className={styles.cross}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth3.png' />
                        <div className={styles.cross}></div>
                        <div className={styles.line}></div>
                        <div className={styles.cross}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth4.png' />
                        <div className={styles.cross}></div>
                        <div className={styles.line}></div>
                        <div className={styles.cross}></div>
                    </article>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Leadership 
