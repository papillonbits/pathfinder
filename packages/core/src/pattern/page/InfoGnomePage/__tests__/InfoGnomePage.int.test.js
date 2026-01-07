import { async, regular } from './InfoGnomePage.int.story'

describe('<InfoGnomePage />', () => {
  describe('Render', () => {
    test('must match async()', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
