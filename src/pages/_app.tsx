import type { AppProps } from 'next/app'
import { Transition } from '@/components/meta'
import { Cursor } from '@/components/shared'
import { useGtag } from '@/utils/gtag'
import '@/styles/globals.scss'
import { Provider } from 'react-wrap-balancer'
import { useEffect } from 'react'
import localFont from 'next/font/local'

// const kayakSans = localFont({
//   fallback: ['system-ui', 'arial'],
//   src: [
//     {
//       path: '../assets/fonts/kayak_sans_regular.woff2',
//       weight: 'normal',
//       style: 'normal'
//     },
//     {
//       path: '../assets/fonts/kayak_sans_bold.woff2',
//       weight: '500',
//       style: 'normal'
//     },
//     {
//       path: '../assets/fonts/kayak_sans_light.woff2',
//       weight: '100',
//       style: 'normal'
//     }
//   ]
// })

const monument = localFont({
  fallback: ['system-ui', 'arial'],
  src: [
    {
      path: '../assets/fonts/monumentgrotesk.woff2',
      weight: 'normal',
      style: 'normal'
    },
  ]
})

function App({ Component, pageProps, router }: AppProps) {
  useGtag(router)

  useEffect(() => {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile
    function onWindowResize() {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px'
      )
    }

    window.addEventListener('resize', onWindowResize, false)
    onWindowResize()

    return () => {
      window.removeEventListener('resize', onWindowResize, false)
    }
  }, [])

  return (
    <div className={monument.className}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <Cursor />
      <Transition />
    </div>
  )
}

export default App
