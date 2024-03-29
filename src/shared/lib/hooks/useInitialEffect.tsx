import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void) => {
  return useEffect(() => {
    if (PROJECT !== 'storybook') {
      callback()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
