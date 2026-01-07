import { lazy, Suspense } from 'react'
import { propTypes } from './ListGnomePage.prop'

const LazyListGnomePage = lazy(() => import('./ListGnomePage'))

export function AsyncListGnomePage() {
  return (
    <Suspense fallback={null}>
      <LazyListGnomePage />
    </Suspense>
  )
}

AsyncListGnomePage.propTypes = propTypes
