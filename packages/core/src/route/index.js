import { AsyncListGnomePage, ListGnomePage } from '../pattern/page/ListGnomePage'
import { AsyncInfoGnomePage, InfoGnomePage } from '../pattern/page/InfoGnomePage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listGnomePagePath, infoGnomePagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const listGnomePageRoute = {
  path: listGnomePagePath,
  clientComponent: AsyncListGnomePage,
  serverComponent: ListGnomePage,
}

export const infoGnomePageRoute = {
  path: infoGnomePagePath,
  clientComponent: AsyncInfoGnomePage,
  serverComponent: InfoGnomePage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
