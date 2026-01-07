import {
  contextSetNavigationAction,
  contextSetProgressAction,
  uiSetListGnomesEditAction,
  uiSetListGnomesSortAction,
  uiSetListGnomesSearchAction,
  uiSetListGnomesPaginationAction,
  uiSetListGnomesAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('context', () => {
    describe('navigation', () => {
      describe('contextSetNavigationAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetNavigationAction(payload)).toMatchObject({ type: 'CONTEXT_SET_NAVIGATION', payload })
        })
      })
    })

    describe('progress', () => {
      describe('contextSetProgressAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetProgressAction(payload)).toMatchObject({ type: 'CONTEXT_SET_PROGRESS', payload })
        })
      })
    })
  })

  describe('ui', () => {
    describe('listGnomes', () => {
      describe('uiSetListGnomesEditAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListGnomesEditAction(payload)).toMatchObject({ type: 'UI_SET_LIST_GNOMES_EDIT', payload })
        })
      })

      describe('uiSetListGnomesSortAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListGnomesSortAction(payload)).toMatchObject({ type: 'UI_SET_LIST_GNOMES_SORT', payload })
        })
      })

      describe('uiSetListGnomesSearchAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListGnomesSearchAction(payload)).toMatchObject({ type: 'UI_SET_LIST_GNOMES_SEARCH', payload })
        })
      })

      describe('uiSetListGnomesPaginationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListGnomesPaginationAction(payload)).toMatchObject({ type: 'UI_SET_LIST_GNOMES_PAGINATION', payload })
        })
      })

      describe('uiSetListGnomesAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListGnomesAction(payload)).toMatchObject({ type: 'UI_SET_LIST_GNOMES', payload })
        })
      })
    })

    describe('infoGnomes', () => {})
  })
})
