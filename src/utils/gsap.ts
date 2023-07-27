import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef, useMemo } from 'react'

gsap.registerPlugin(ScrollTrigger)

// Memoises GSAP’s selector utility
// @link https://greensock.com/react-advanced/#useSelector
function useSelector() {
  const ref = useRef<HTMLElement>(null)
  const q = useMemo(() => gsap.utils.selector(ref), [ref])
  return [q, ref]
}

// Adds refs to an array
// @link https://greensock.com/react-advanced/#useArrayRef
function useArrayRef() {
  const refs = useRef<HTMLElement[]>([])
  refs.current = []
  return [refs, (ref: HTMLElement) => ref && refs.current.push(ref)]
}

export { gsap, ScrollTrigger, useArrayRef, useSelector }
