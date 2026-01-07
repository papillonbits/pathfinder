import { lazy, Suspense } from 'react'
import { propTypes } from './InfoGnomePage.prop'

const LazyInfoGnomePage = lazy(() => import('./InfoGnomePage'))

export function AsyncInfoGnomePage() {
  return (
    <Suspense fallback={null}>
      <LazyInfoGnomePage />
    </Suspense>
  )
}

AsyncInfoGnomePage.propTypes = propTypes
