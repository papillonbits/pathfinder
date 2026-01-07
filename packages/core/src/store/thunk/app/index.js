/* eslint-disable no-console */
import { bindActionCreators } from 'redux'
import { getCurrentIndex, getIndexItems, getRange, getItemsDefaultSelected } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { messageType, pageSize, pageNumber } from '../../../library/constant'
import { gnomeHairColors, gnomeHairColorsDefault } from '../../../library/constant/hairColors'
import { gnomeProfessions, gnomeProfessionsDefault } from '../../../library/constant/professions'
import * as actionCreators from '../../action/actionCreators'
import gnomesStaticData from './gnomesStaticData.json'

export async function getGnomesData({ dispatch }) {
  const { contextSetProgressAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: 'Collecting gnomes...',
      type: messageType.info,
    },
    isLoading: true,
  })

  contextSetProgressAction({
    message: {
      text: gnomesStaticData?.length !== 0 ? 'Successfully collected gnomes!' : 'There are no gnomes yet!',
      type: gnomesStaticData?.length !== 0 ? messageType.success : messageType.warning,
    },
    isLoading: false,
  })

  return gnomesStaticData.Brastlewark
}

export function getGnomes({ gnomes }) {
  const gnomesObjects = sortObjects({
    sort: sortDefault,
    objects: gnomes,
  })

  const items = getRange({
    range: Math.ceil(gnomesObjects.length / pageSize.gnomes),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  return {
    pagination: {
      pageSize: pageSize.gnomes,
      pageNumber,
      currentPage,
    },

    gnomesObjects: gnomesObjects.map(
      ({
        hair_color, // eslint-disable-line camelcase
        ...rest
      }) => ({
        hairColor: hair_color, // eslint-disable-line camelcase
        ...rest,
      }),
    ),

    search: {
      hairColor: getItemsDefaultSelected({ defaultItems: gnomeHairColorsDefault, items: gnomeHairColors }),
      profession: getItemsDefaultSelected({ defaultItems: gnomeProfessionsDefault, items: gnomeProfessions }),
      gnomesObjects: null,
    },
    sort: sortDefault,
    edit: {},
  }
}
