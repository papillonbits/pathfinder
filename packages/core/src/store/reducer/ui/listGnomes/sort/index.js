import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetListGnomesSort(state, action) {
  const newSort = getSort({ currentSort: state.listGnomes.sort, newSort: action.payload.newSort })

  return {
    ...state,
    listGnomes: {
      ...state.listGnomes,
      gnomesObjects: sortObjects({ sort: newSort, objects: state.listGnomes.gnomesObjects }),
      search: {
        ...state.listGnomes.search,
        gnomesObjects: sortObjects({ sort: newSort, objects: state.listGnomes.search.gnomesObjects }),
      },
      sort: newSort,
    },
  }
}
