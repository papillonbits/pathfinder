import { combineReducers } from 'redux'
import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SET_LIST_GNOMES_EDIT,
  UI_SET_LIST_GNOMES_SORT,
  UI_SET_LIST_GNOMES_SEARCH,
  UI_SET_LIST_GNOMES_PAGINATION,
  UI_SET_LIST_GNOMES,
} from '../action/actionTypes'

import { contextSetNavigation } from './context/navigation/set'
import { contextSetProgress } from './context/progress/set'

import { uiSetListGnomesEdit } from './ui/listGnomes/edit'
import { uiSetListGnomesSort } from './ui/listGnomes/sort'
import { uiSetListGnomesSearch } from './ui/listGnomes/search'
import { uiSetListGnomesPagination } from './ui/listGnomes/pagination'
import { uiSetListGnomes } from './ui/listGnomes/set'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        case CONTEXT_SET_PROGRESS:
          return contextSetProgress(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_SET_LIST_GNOMES_EDIT:
          return uiSetListGnomesEdit(state, action)
        case UI_SET_LIST_GNOMES_SORT:
          return uiSetListGnomesSort(state, action)
        case UI_SET_LIST_GNOMES_SEARCH:
          return uiSetListGnomesSearch(state, action)
        case UI_SET_LIST_GNOMES_PAGINATION:
          return uiSetListGnomesPagination(state, action)
        case UI_SET_LIST_GNOMES:
          return uiSetListGnomes(state, action)
        default:
          return state
      }
    },
  })
