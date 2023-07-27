import { useEffect } from 'react'
import { NextRouter } from 'next/router'
import { isDev } from '@/utils/constants'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string
  category: string
  label: string
  value: string
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

export const disable = () => {
  // @ts-ignore
  window[`ga-disable-${GA_TRACKING_ID}`] = true
}

export function useGtag(router: NextRouter) {
  useEffect(() => {
    if (isDev) {
      disable()
      return
    }

    const handleRouteChange = (url: string) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return null
}
