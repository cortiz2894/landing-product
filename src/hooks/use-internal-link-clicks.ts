import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * The useInternalLinkClicks hook intercepts clicks on internal anchor elements
 * (links starting with '/') for all pages. When a user clicks on a link, the hook
 * prevents the default navigation behavior and instead triggers a custom transition.
 */

export function useInternalLinkClicks(callback: (v: string) => void) {
  const { pathname } = useRouter()
  const lenis = useLenis(() => {})

  useEffect(() => {
    if (!callback) return

    const handleClick: EventListener = event => {
      const target = event.target as HTMLElement
      const link = target.closest<HTMLAnchorElement>('a[href^="/"]')

      if (link) {
        const href = link.getAttribute('href')
        if (!href) return

        const isInternalHref = href.startsWith('/')
        const isAnchor = href.includes('#')

        if (isInternalHref) {
          if (href === pathname && !isAnchor) {
            lenis.scrollTo('body')
          } else if (isAnchor) {
            const url = href.split('#').shift()

            if (url !== pathname) {
              event.preventDefault()
              callback(href)
            }
          } else {
            event.preventDefault()
            callback(href)
          }
        }
      }
    }

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]')
    const boundClickHandlers = new Map<HTMLAnchorElement, EventListener>()

    links.forEach(link => {
      boundClickHandlers.set(link, handleClick)
      link.addEventListener('click', handleClick)
    })

    return () => {
      links.forEach(link => {
        const boundHandler = boundClickHandlers.get(link)
        if (boundHandler) {
          link.removeEventListener('click', boundHandler)
        }
      })
    }
  }, [callback, pathname, lenis])

  return null
}
