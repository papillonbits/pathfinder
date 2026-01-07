import { regular } from './ListGnomeTemplate.int.story'

describe('<ListGnomeTemplate />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
