/* eslint-disable global-require */
describe('path', () => {
  const someBaseUrl = 'fantastic-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const requirePath = () => require('../path')

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('appRootPath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe('/')
    })
  })

  describe('listGnomePagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { listGnomePagePath } = requirePath()
      expect(listGnomePagePath).toBe(`${process.env.BASE_URL}/list`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { listGnomePagePath } = requirePath()
      expect(listGnomePagePath).toBe('/list')
    })
  })

  describe('infoGnomePagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { infoGnomePagePath } = requirePath()
      expect(infoGnomePagePath).toBe(`${process.env.BASE_URL}/info`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { infoGnomePagePath } = requirePath()
      expect(infoGnomePagePath).toBe('/info')
    })
  })
})
/* eslint-enable global-require */
