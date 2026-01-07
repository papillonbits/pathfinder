const rootPath = '/'
const listGnomePath = '/list'
const infoGnomePath = '/info'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const listGnomePagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${listGnomePath}` : listGnomePath
export const infoGnomePagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${infoGnomePath}` : infoGnomePath

export const startPagePath = listGnomePagePath
