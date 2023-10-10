import { FC, useRef, useState } from 'react'
import cn from 'clsx'
import styles from './Leadership.module.scss'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap } from '@/utils/gsap'
import { useInView } from 'react-intersection-observer'

type Props = {
//   stopMove: boolean,
    theme: 'light' | 'dark'
}

const Leadership: FC<Props> = ({theme}) => {
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
            gsap            
            .fromTo(item, {
                opacity: 0,
                y: 200
            },{
              opacity: 1,
              y: 0,
              stagger: 0.3,
              ease: '0.48, 0.01, 0.27, 1.00',
              overwrite: true,
            })
        }

    }, [inView])

    return (
      <div className={cn(styles.root, styles[theme])} ref={ref}>
        <div className={styles.backgroundLayout}>
          <div className='container'>
            <div className='grid' ref={$ref}>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth1.png' />
                        <p>
                            A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable.
                            Oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable
                        </p>
                        <div className={styles.line}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth2.png' />
                        <p>
                            A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable.
                            Oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable
                        </p>
                        <div className={styles.line}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth3.png' />
                        <p>
                            A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable.
                            Oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable
                        </p>
                        <div className={styles.line}></div>
                    </article>
                </div>
                <div className='span-3'>
                    <article className={cn(styles.item, 'item')}>
                        <img src='/synth4.png' />
                        <p>
                            A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable.
                            Oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable
                        </p>
                        <div className={styles.line}></div>
                    </article>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Leadership 
