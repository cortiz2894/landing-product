import styles from './TextMarquee.module.scss'
import cn from 'clsx'
import { useRef, useEffect} from 'react'
import { FC } from 'react'
// import LoopingText from '@/utils/marquee.js'


type Props = {
  content: string
	direction?: string
	speed?: number
	theme: 'light' | 'dark'
}

const TextMarquee: FC<Props> = ({ content, direction = 'left', speed = 1, theme }) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const container = useRef<HTMLDivElement | null>(null)

  // useEffect( () => {
	// 	if(ref.current && container.current) {
	// 		const clone = ref.current.cloneNode(true);
	// 		container.current.appendChild(clone);
	// 		document.querySelectorAll(".loop-container").forEach(
	// 			(el) =>
	// 					new LoopingText(
	// 							el,
	// 							direction == "left" ? -1 : 1,
	// 							speed
	// 					)
	// 		);
	// 	}	
	// }, [speed])

  return (
	<>
			<div>
				<section className={cn(styles.heroSection, styles[theme])}>
					<div className={'loop-container'} ref={container}>
							<div className={styles.item} id="text" ref={ref}>
								<span>{ content}&nbsp;</span>
							</div>
					</div>
				</section>
			</div>
	</>
  )
}

export default TextMarquee
