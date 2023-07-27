import useStore from '@/utils/store'
import { gsap } from '@/utils/gsap'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import styles from './Transition.module.scss'
import { useInternalLinkClicks } from '@/hooks/use-internal-link-clicks'

const Transition = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [done, setDone] = useState<boolean>(false)
  const router = useRouter()
  const timeline = useRef(gsap.timeline())
  const transition = useStore(({ transition }) => transition)
  const setTransition = useStore(({ setTransition }) => setTransition)

  useInternalLinkClicks(setTransition)

  useIsomorphicLayoutEffect(() => {
    if (transition === '') return

    // in
    timeline.current.to(ref.current, {
      y: 0,
      startAt: { y: '-100%' },
      duration: 0.75,
      ease: 'circ.inOut',
      onComplete: () => {
        router.push(transition)
        setDone(true)
      }
    })

    return () => {
      timeline.current?.kill()
    }
  }, [transition])

  useIsomorphicLayoutEffect(() => {
    if (!loaded) return

    // out
    timeline.current.to(ref.current, {
      y: '100%',
      startAt: { y: 0 },
      duration: 0.5,
      ease: 'circ.inOut',
      paused: !loaded,
      onComplete: () => {
        setTransition('')
        setDone(false)
        setLoaded(false)
      }
    })

    return () => {
      timeline.current?.kill()
    }
  }, [loaded])

  useEffect(() => {
    if (!done) return
    const changeRouteComplete = () => setLoaded(true)
    router.events.on('routeChangeComplete', changeRouteComplete)
    return () => router.events.off('routeChangeComplete', changeRouteComplete)
  }, [done, router.events])

  return <div ref={ref} className={styles.root} />
}
export default Transition
