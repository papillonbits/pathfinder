import { InfoGnomeTemplate } from '../../template/InfoGnomeTemplate'
import { propTypes } from './InfoGnomePage.prop'

export function InfoGnomePage() {
  return <InfoGnomeTemplate />
}

InfoGnomePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default InfoGnomePage
