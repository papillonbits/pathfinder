import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncInfoGnomePage } from '../AsyncInfoGnomePage'
import { InfoGnomePage } from '../InfoGnomePage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Pathfinder/Page/InfoGnomePage',
  component: InfoGnomePage,
  decorators: [withTests({ results })],
  parameters: { jest: ['InfoGnomePage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <AsyncInfoGnomePage />
      </MemoryRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <InfoGnomePage />
      </MemoryRouter>
    </Provider>
  )
}
