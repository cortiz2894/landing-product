import styles from './TextMarquee.module.scss'
import cn from 'clsx'
import { useRef , useLayoutEffect, useState} from 'react'
import { FC } from 'react'
import LoopingText from '../../../utils/marquee'


type Props = {
  content: string
	direction?: string
	speed?: number
}

const TextMarquee: FC<Props> = ({ content, direction = 'left', speed = 1 }) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const container = useRef<HTMLDivElement | null>(null)

  useLayoutEffect( () => {
		
		if(ref.current && container.current) {
			const clone = ref.current.cloneNode(true);
			container.current.appendChild(clone);
			document
					.querySelectorAll(".loop-container")
					.forEach(
							(el) =>
									new LoopingText(
											el,
											direction == "left" ? -1 : 1,
											speed
									)
					);
		}	
		
	}, [speed])

  return (
	<>
			<div>
				<section className={styles.heroSection}>
					<div className={'loop-container'} ref={container}>
							<div className={styles.item} id="text" ref={ref}>{ content}&nbsp;</div>
					</div>
				</section>
			</div>
	</>
  )
}

export default TextMarquee