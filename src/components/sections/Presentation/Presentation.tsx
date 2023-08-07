import { FC, SetStateAction, Dispatch, useEffect, useRef } from 'react'
import cn from 'clsx'
import styles from './Presentation.module.scss'
import { useInView } from 'react-intersection-observer'
import { Title } from '@/components/shared'

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
      <div className={styles.root}>
        <div className='container'>
					<div className='grid' >
						<div className='span-12' ref={ref}>
							<Title text={"HiKeys―1977"} align={'center'}/>
							<h4 className={styles.copy}>Experience seamless control and effortless navigation with our synth keyboards' intuitive interface. Designed with musicians in mind, the user-friendly layout ensures that you spend more time creating and less time navigating complex menus.</h4>
						</div>
						<div className='span-12'>
							<img src={'/synth-linewar.png'} className={styles.linewar}/>
						</div>
						<div className='start-9 span-4'>
							<p className={styles.description}>● A 3340 voltage controlled oscillator feeds into a 4-pole OTA filter that makes for an iconic and unmistakable sound. Make it snap and sing with responsive analog envelopes, modulation, and portamento, or bring in external CV for deeper VCO and VCF control.</p>
						</div>
					</div>
        </div>
      </div>
    )
}

export default Presentation 
