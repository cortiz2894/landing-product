import { CSSProperties, FC, useRef, useState } from 'react'
import { gsap } from '@/utils/gsap'
import styles from './Cursor.module.scss'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

/**
 * Add the data-cursor="YOUR_TEXT" attribute to a container element.
 */

type Variant = 'default' | 'light'

type Props = {
  duration?: number
  ease?: string
  size?: number
}

const Cursor: FC<Props> = ({
  duration = 0.3,
  ease = 'power3',
  size = null
}) => {
  const cursor = useRef<HTMLDivElement>(null)
  const [text, setText] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [variant, setVariant] = useState<Variant>('default')

  useIsomorphicLayoutEffect(() => {
    if (!visible) return

    const xTo = gsap.quickTo(cursor.current, 'x', {
      duration,
      ease
    })
    const yTo = gsap.quickTo(cursor.current, 'y', {
      duration,
      ease
    })

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [visible])

  useIsomorphicLayoutEffect(() => {
    function onMouseOut() {
      setVisible(false)
    }

    function onMouseOver(e: any) {
      const element = e.target as HTMLElement
      if (!element.dataset.cursor) return

      const value = e.target?.dataset?.cursor || 'View'
      const variant: Variant = e.target?.dataset?.cursorVariant || 'default'
      setText(value)
      setVariant(variant)
      setVisible(true)

      gsap.fromTo(
        cursor.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.3,
          delay: 0.1
        }
      )
    }

    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return (
    <div style={{ opacity: visible ? 1 : 0 }} className={styles.root}>
      <div
        className={styles.inner}
        ref={cursor}
        style={{ '--size': size ? size : null } as CSSProperties}
        data-variant={variant}
      >
        {text}
      </div>
    </div>
  )
}

export default Cursor
