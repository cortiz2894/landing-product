import styles from './TextReveal.module.scss'
import cn from 'clsx'
import { useInView } from 'react-intersection-observer'
import { gsap } from '@/utils/gsap'
import { useRef , useLayoutEffect} from 'react'
import { FC, useMemo } from 'react'

interface Line {
	text: string
}

type Props = {
  text: Line[]
  color?: '#fff' | '#000'
	align?:'center' | 'left' | 'right'
	size?: 'small' | 'regular' | 'large'
}
const TextReveal: FC<Props> = ({ text, color = '#000', align = 'left', size = 'regular' }) => {

const title = useRef<HTMLSpanElement>(null)
const line = useRef<HTMLDivElement>(null)

  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useLayoutEffect( () => {
		
		const tl = gsap.timeline({defaults: {duration: 1.8}});

		if(inView){ 
			console.log('es mayor a 1: ', text.length > 1)
			if(text.length > 1) {
				tl.from('.line span', {
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
			if(text.length == 1) {
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
		}

	}, [inView])

  return (
	<>
		<div className={cn(styles.containers, !inView && styles.dissapear, styles[size])} ref={ref}>
			{text.map( (item, i) => {
				return(
					<div className={cn(styles.line, 'line')} key={i} ref={line}>
						<span className={styles[align]} ref={title}>{item.text}</span>
					</div>
				)
			})}
		</div>
	</>
  )
}

export default TextReveal
