import { useRef, useCallback } from 'react'

/** Cursor-tracked spotlight position, plus an optional subtle 3D tilt. */
export function useSpotlight(tiltMax = 0) {
  const ref = useRef(null)

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      el.style.setProperty('--spot-x', `${x}px`)
      el.style.setProperty('--spot-y', `${y}px`)
      if (tiltMax) {
        el.style.setProperty('--tilt-x', `${(y / r.height - 0.5) * -tiltMax}deg`)
        el.style.setProperty('--tilt-y', `${(x / r.width - 0.5) * tiltMax}deg`)
      }
    },
    [tiltMax]
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
