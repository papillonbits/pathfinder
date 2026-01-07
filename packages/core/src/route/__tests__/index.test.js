/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListGnomePage = () => {
  const listGnomePagePath = '../../pattern/page/ListGnomePage'
  jest.mock(listGnomePagePath, () => 'ListGnomePage')
  return require(listGnomePagePath)
}

const mockRequireInfoGnomePage = () => {
  const infoGnomePagePath = '../../pattern/page/InfoGnomePage'
  jest.mock(infoGnomePagePath, () => 'InfoGnomePage')
  return require(infoGnomePagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => ({
    appRootPath: 'fantastic-app-root-path',
    listGnomePagePath: 'fantastic-list-gnome-page-path',
    infoGnomePagePath: 'fantastic-info-gnome-page-path',
  }))
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('listGnomePageRoute', () => {
    const listGnomePage = mockRequireListGnomePage()

    const expectedListGnomePageRoute = {
      path: path.listGnomePagePath,
      clientComponent: listGnomePage.AsyncListGnomePage,
      serverComponent: listGnomePage.ListGnomePage,
    }

    test('must return list gnome page route object', () => {
      const { listGnomePageRoute } = requireIndex()
      expect(listGnomePageRoute).toEqual(expectedListGnomePageRoute)
    })
  })

  describe('infoGnomePageRoute', () => {
    const infoGnomePage = mockRequireInfoGnomePage()

    const expectedInfoGnomePageRoute = {
      path: path.infoGnomePagePath,
      clientComponent: infoGnomePage.AsyncInfoGnomePage,
      serverComponent: infoGnomePage.InfoGnomePage,
    }

    test('must return info gnome page route object', () => {
      const { infoGnomePageRoute } = requireIndex()
      expect(infoGnomePageRoute).toEqual(expectedInfoGnomePageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
