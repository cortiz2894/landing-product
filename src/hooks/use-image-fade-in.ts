import { useState } from 'react'

export const useImageFadeIn = () => {
  const [loaded, setLoaded] = useState(false)

  return {
    style: {
      opacity: loaded ? undefined : 0,
      transition: 'opacity 0.3s ease-in-out'
    },
    onLoadingComplete: () => {
      setLoaded(true)
    }
  }
}
