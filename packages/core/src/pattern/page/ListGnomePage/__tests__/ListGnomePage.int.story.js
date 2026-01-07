import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncListGnomePage } from '../AsyncListGnomePage'
import { ListGnomePage } from '../ListGnomePage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Pathfinder/Page/ListGnomePage',
  component: ListGnomePage,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListGnomePage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <AsyncListGnomePage />
      </MemoryRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <ListGnomePage />
      </MemoryRouter>
    </Provider>
  )
}
