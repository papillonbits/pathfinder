import { sortObjects } from '@papillonbits/library/sort'
import { getPagination } from '@papillonbits/library/pagination'
import {
  getListGnomesObjectsByHairColor,
  getListGnomesObjectsByProfession,
  getListGnomesObjectsByFriend,
  getListGnomesObjectsByName,
  getListGnomesObjectsByAge,
  getListGnomesObjectsByHeight,
  getListGnomesObjectsByWeight,
  getListGnomesObjectsByThumbnail,
} from '../get'

export function getListGnomesSearch({ state, action }) {
  let newSearch

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.hairColor && !state.listGnomes.search
        ? null
        : getListGnomesObjectsByHairColor({
            objects: state.listGnomes.gnomesObjects,
            hairColor: action.payload?.hairColor,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.profession && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByProfession({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            profession: action.payload?.profession,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.friend && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByFriend({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            friend: action.payload?.friend,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.thumbnail && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByThumbnail({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            thumbnail: action.payload?.thumbnail,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.name && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByName({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            name: action.payload?.name,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.age && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByAge({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            age: action.payload?.age,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.age && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByHeight({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            height: action.payload?.height,
          }),
  }

  newSearch = {
    hairColor: action.payload?.hairColor ?? state.listGnomes.search?.hairColor,
    profession: action.payload?.profession ?? state.listGnomes.search?.profession,
    friend: action.payload?.friend ?? state.listGnomes.search?.friend,
    thumbnail: action.payload?.thumbnail ?? state.listGnomes.search?.thumbnail,
    name: action.payload?.name ?? state.listGnomes.search?.name,
    age: action.payload?.age ?? state.listGnomes.search?.age,
    height: action.payload?.height ?? state.listGnomes.search?.height,
    weight: action.payload?.weight ?? state.listGnomes.search?.weight,
    gnomesObjects:
      !action.payload.age && !state.listGnomes.search
        ? newSearch.gnomesObjects || state.listGnomes.gnomesObjects
        : getListGnomesObjectsByWeight({
            objects: newSearch.gnomesObjects || state.listGnomes.gnomesObjects,
            weight: action.payload?.weight,
          }),
  }

  return newSearch
}

export function uiSetListGnomesSearch(state, action) {
  const newSearch = getListGnomesSearch({ state, action })

  const newPagination = getPagination({
    searchObjects: newSearch.gnomesObjects,
    regularObjects: state.listGnomes.gnomesObjects,
    pagination: state.listGnomes.pagination,
  })

  return {
    ...state,
    listGnomes: {
      ...state.listGnomes,
      gnomesObjects: sortObjects({ sort: state.listGnomes.sort, objects: state.listGnomes.gnomesObjects }),
      pagination: newPagination,
      search: {
        ...newSearch,
        gnomesObjects: sortObjects({ sort: state.listGnomes.sort, objects: newSearch.gnomesObjects }),
      },
    },
  }
}
