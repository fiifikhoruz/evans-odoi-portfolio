import { useState } from 'react'

function Shot({ src, fallback, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback)
      }}
      className={`h-full w-full object-cover object-top ${loaded ? '' : 'img-loading'} ${className}`}
    />
  )
}

/** Desktop browser chrome around a live screenshot. */
export function BrowserFrame({ src, fallback, alt, url }) {
  return (
    <figure className="theme-smooth overflow-hidden rounded-xl border border-line/10 bg-surface shadow-sm">
      <div className="theme-smooth flex items-center gap-2 border-b border-line/10 bg-raised px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-line/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-line/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-line/20" />
        </span>
        {url && (
          <span className="theme-smooth ml-2 truncate rounded-md bg-bg px-2.5 py-1 font-mono text-[11px] text-faint">
            {url.replace(/^https?:\/\//, '')}
          </span>
        )}
      </div>
      <div className="aspect-[16/10] w-full">
        <Shot src={src} fallback={fallback} alt={alt} />
      </div>
    </figure>
  )
}

/** Phone bezel around a mobile-viewport screenshot. */
export function PhoneFrame({ src, fallback, alt }) {
  return (
    <figure className="theme-smooth w-full max-w-[180px] overflow-hidden rounded-[2rem] border border-line/15 bg-raised p-1.5 shadow-sm">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-bg">
        <span
        aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-[5px] w-14 -translate-x-1/2 rounded-full bg-line/20"
        />
        <div className="aspect-[9/19] w-full">
          <Shot src={src} fallback={fallback} alt={alt} />
        </div>
      </div>
    </figure>
  )
}
