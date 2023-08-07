import styles from './Title.module.scss'
import cn from 'clsx'
import { useInView } from 'react-intersection-observer'
import { gsap } from '@/utils/gsap'
import { useRef , useLayoutEffect} from 'react'
import { FC } from 'react'

type Props = {
  text: string
  color?: '#fff' | '#000'
	align?:'center' | 'left' | 'right'
}
const Title: FC<Props> = ({ text, color = '#000', align = 'left' }) => {
	const title = useRef<HTMLSpanElement>(null)
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useLayoutEffect( () => {
		
		const tl = gsap.timeline({defaults: {duration: 1.8}});

		if(inView){ 
			tl.from(title.current, {
				y: 200,
				ease: "power4.out",
				delay: 0.4,
				skewY: 7,
				opacity: 0,
				stagger: {
					amount: 0.3
				}
			})
		}

	}, [inView])

  return (
	<>
		<div className={cn(styles.containers, !inView && styles.dissapear)} ref={ref}>
			<div className={styles.line}>
				<span ref={title} className={styles[align]}>{text}</span>
			</div>
		</div>
	</>
  )
}

export default Title
