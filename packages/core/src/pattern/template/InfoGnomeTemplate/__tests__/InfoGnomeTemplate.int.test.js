import { regular } from './InfoGnomeTemplate.int.story'

describe('<InfoGnomeTemplate />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
