import { ListGnomeTemplate } from '../../template/ListGnomeTemplate'
import { propTypes } from './ListGnomePage.prop'

export function ListGnomePage() {
  return <ListGnomeTemplate />
}

ListGnomePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ListGnomePage
