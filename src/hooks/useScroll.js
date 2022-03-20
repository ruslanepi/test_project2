import { useEffect, useRef } from 'react'

export default function useScroll(parentRef, childRef, callback) {
  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 1,
    }
    const observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersected')
        callback()
      }
    }, options)

    observer.observe(childRef.current)

    return function () {
      observer.unobserve(childRef.current)
    }
  }, [callback])
}
