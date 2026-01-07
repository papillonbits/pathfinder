import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonbits/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { InfoGnomeTemplate } from '../index'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Pathfinder/Template/InfoGnomeTemplate',
  component: InfoGnomeTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['InfoGnomeTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <MemoryRouter>
        <InfoGnomeTemplate />
      </MemoryRouter>
    </Provider>
  )
}
