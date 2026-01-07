import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SET_LIST_GNOMES_EDIT,
  UI_SET_LIST_GNOMES_SORT,
  UI_SET_LIST_GNOMES_SEARCH,
  UI_SET_LIST_GNOMES_PAGINATION,
  UI_SET_LIST_GNOMES,
} from './actionTypes'

export const contextSetNavigationAction = (payload) => ({ type: CONTEXT_SET_NAVIGATION, payload })
export const contextSetProgressAction = (payload) => ({ type: CONTEXT_SET_PROGRESS, payload })
export const uiSetListGnomesEditAction = (payload) => ({ type: UI_SET_LIST_GNOMES_EDIT, payload })
export const uiSetListGnomesSortAction = (payload) => ({ type: UI_SET_LIST_GNOMES_SORT, payload })
export const uiSetListGnomesSearchAction = (payload) => ({ type: UI_SET_LIST_GNOMES_SEARCH, payload })
export const uiSetListGnomesPaginationAction = (payload) => ({ type: UI_SET_LIST_GNOMES_PAGINATION, payload })
export const uiSetListGnomesAction = (payload) => ({ type: UI_SET_LIST_GNOMES, payload })
