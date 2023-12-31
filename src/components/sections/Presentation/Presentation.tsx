import { FC, SetStateAction, Dispatch, useEffect, useRef } from 'react'
import cn from 'clsx'
import styles from './Presentation.module.scss'
import { useInView } from 'react-intersection-observer'
import { TextReveal } from '@/components/shared'
import {LineSvgKeyboard} from '@/components/shared/'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap } from '@/utils/gsap'

type Props = {
	isTextInScreen : Dispatch<SetStateAction<boolean>>,
}

const Presentation: FC<Props> = ( { isTextInScreen }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.3,
		triggerOnce: false
	})
	
	useEffect( ()=> {
		isTextInScreen(inView)
	})


    return (
      <div className={styles.root} id={'presentationContainer'}>
		<div id={'presentation'} className={styles.blackScroll}></div>
        <div className='container' >
			<div className='grid' >
				<div className='span-12' ref={ref}>
					<TextReveal text={[{text : "HiKeys―1977"}]} align={'center'} size={'large'}/>
					<div className={styles.paragrapht}>
						<TextReveal text={[{text : "Experience seamless control and effortless navigation"}]} align={'left'}/>
						<TextReveal text={[{text : "with our synth keyboards intuitive interface."}]} align={'left'}/>
						<TextReveal text={[{text : "Designed with musicians in mind, the user-friendly layout"}]} align={'left'}/>
						<TextReveal text={[{text : "ensures that you spend more time creating and less time navigating complex menus."}]} align={'left'}/>
					</div>
				</div>
				<div className='span-12' id='lineSvg'>
					<div className={styles.linewar}>
						<LineSvgKeyboard />
					</div>
				</div>
				<div className='start-md-9 start-0 span-12 span-md-4'>
					<p className={styles.description}>● A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable sound. Make it snap and sing with responsive analog envelopes, modulation, and portamento, or bring in external CV for deeper VCO and VCF control.</p>
				</div>
			</div>
        </div>
      </div>
    )
}

export default Presentation 
