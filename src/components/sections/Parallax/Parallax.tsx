import { FC, useRef, useState } from 'react'
import cn from 'clsx'
import styles from './Parallax.module.scss'
import KeyboardScene  from '../../shared/SceneTest/SceneTest'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap } from '@/utils/gsap'
import { KeyboardBase } from '@/components/shared'

import { useInView } from 'react-intersection-observer'

const Parallax = () => {

	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.3,
		triggerOnce: true
	})

    return (
      <div className={styles.root} ref={ref}>
        <div className={styles.canvas}>
          {/* <KeyboardScene/> */}
          <KeyboardBase inView={inView}/>
        </div>
        <div className={styles.canvas}>
          {/* <KeyboardScene/> */}
          <KeyboardBase inView={inView}/>
        </div>
        <div className={styles.backgroundLayout}>
        </div>
      </div>
    )
}

export default Parallax 
