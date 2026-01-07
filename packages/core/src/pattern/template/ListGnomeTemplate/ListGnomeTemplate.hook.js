import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { sortDefault } from '@papillonbits/library/sort'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { isNumericInput } from '../../../library'
import { alertTextListGnomes } from '../../../library/constant/alertText/listGnomes'

export function useListGnomeState() {
  const navigate = useNavigate()

  const {
    contextSetNavigationAction,
    uiSetListGnomesEditAction,
    uiSetListGnomesSortAction,
    uiSetListGnomesSearchAction,
    uiSetListGnomesPaginationAction,
    contextSetProgressRegularThunk,
  } = useBindActionCreators()

  const navigation = useSelector(({ context }) => context.navigation)
  const progress = useSelector(({ context }) => context.progress)

  const {
    gnomesObjects,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    search,
  } = useSelector(({ ui }) => ui.listGnomes)

  const paginatedRandomGnomesObjects = paginate({
    array: search.gnomesObjects || gnomesObjects,
    pageSize,
    pageNumber,
  })

  const paginatedRandomGnomesObjectsNamesValues = paginatedRandomGnomesObjects.map((gnomesObject) =>
    (({ id, name, age, height, weight, hairColor, professions, friends, thumbnail, ...rest }) => ({
      names: Object.keys({
        id,
        name,
        age,
        height,
        weight,
        hairColor,
        professions,
        friends,
        thumbnail,
        ...rest,
      }),
      values: Object.values({
        id,
        name,
        age: age === 0 ? '' : age,
        height: height === 0 ? '' : height?.toFixed(2),
        weight: weight === 0 ? '' : weight?.toFixed(2),
        hairColor,
        professions: professions?.join(' | '),
        friends: friends?.join(' | '),
        thumbnail: thumbnail?.split('/').pop(),
        ...rest,
      }),
    }))(gnomesObject),
  )

  /* istanbul ignore next */
  function searchHairColorOnClick(newHairColor) {
    uiSetListGnomesSearchAction({
      hairColor: newHairColor.items,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchProfessionOnClick(newProfession) {
    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: newProfession.items,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchFriendOnChange(event) {
    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: event.target.value,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchFriendOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: event.target.value,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: null,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchFriendOnFocus() {}

  /* istanbul ignore next */
  function searchFriendOnBlur() {}

  /* istanbul ignore next */
  function searchThumbnailOnChange(event) {
    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: event.target.value,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchThumbnailOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: event.target.value,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: null,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchThumbnailOnFocus() {}

  /* istanbul ignore next */
  function searchThumbnailOnBlur() {}

  /* istanbul ignore next */
  function searchNameOnChange(event) {
    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: event.target.value,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchNameOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: event.target.value,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: null,
        age: search.age,
        height: search.height,
        weight: search.weight,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchNameOnFocus() {}

  /* istanbul ignore next */
  function searchNameOnBlur() {}

  /* istanbul ignore next */
  function searchAgeOnChange(event) {
    if (!isNumericInput(event)) {
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: event.target.value,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchAgeOnKeyUp(event) {
    if (!isNumericInput(event)) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: event.target.value,
        height: search.height,
        weight: search.weight,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: null,
        height: search.height,
        weight: search.weight,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchAgeOnFocus() {}

  /* istanbul ignore next */
  function searchAgeOnBlur() {}

  /* istanbul ignore next */
  function searchHeightOnChange(event) {
    if (!isNumericInput(event)) {
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: event.target.value,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchHeightOnKeyUp(event) {
    if (!isNumericInput(event)) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: event.target.value,
        weight: search.weight,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: null,
        weight: search.weight,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchHeightOnFocus() {}

  /* istanbul ignore next */
  function searchHeightOnBlur() {}

  /* istanbul ignore next */
  function searchWeightOnChange(event) {
    if (!isNumericInput(event)) {
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchWeightOnKeyUp(event) {
    if (!isNumericInput(event)) {
      return
    }

    if (event.key === eventKey.enter) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListGnomesSearchAction({
        hairColor: search.hairColor,
        profession: search.profession,
        friend: search.friend,
        thumbnail: search.thumbnail,
        name: search.name,
        age: search.age,
        height: search.height,
        weight: null,
      })
      return
    }

    uiSetListGnomesSearchAction({
      hairColor: search.hairColor,
      profession: search.profession,
      friend: search.friend,
      thumbnail: search.thumbnail,
      name: search.name,
      age: search.age,
      height: search.height,
      weight: search.weight,
    })
  }

  /* istanbul ignore next */
  function searchWeightOnFocus() {}

  /* istanbul ignore next */
  function searchWeightOnBlur() {}

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetListGnomesPaginationAction({ paginationAction })
    contextSetProgressRegularThunk({ message: { text: alertTextListGnomes.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function gnomesObjectsFlexGridOnClick(newSort) {
    uiSetListGnomesSortAction({ newSort })
  }

  /* istanbul ignore next */
  function gnomesObjectsFlexGridOnDoubleClick(objectIndex) {
    const paginatedIndex = pageSize * currentPage.currentIndex + objectIndex

    uiSetListGnomesEditAction({ index: paginatedIndex })

    const newNavigation = {
      ...navigation,
      items: [
        { ...navigation.items[0], isSelected: false },
        { ...navigation.items[1], isSelected: true },
      ],
    }
    contextSetNavigationAction(newNavigation)
    navigate(process.env.BASE_URL ? `${'..'}${process.env.BASE_URL}${'/info'}` : '../info', { replace: true })
  }

  return {
    alertTextListGnomes,
    pageContent,
    progress,
    currentPage,
    sort: sort || sortDefault,
    search,
    paginatedRandomGnomesObjectsNamesValues,
    searchHairColorOnClick,
    searchProfessionOnClick,
    searchFriendOnChange,
    searchFriendOnKeyUp,
    searchFriendOnFocus,
    searchFriendOnBlur,
    searchNameOnChange,
    searchNameOnKeyUp,
    searchNameOnFocus,
    searchNameOnBlur,
    searchAgeOnChange,
    searchAgeOnKeyUp,
    searchAgeOnFocus,
    searchAgeOnBlur,
    searchHeightOnChange,
    searchHeightOnKeyUp,
    searchHeightOnFocus,
    searchHeightOnBlur,
    searchWeightOnChange,
    searchWeightOnKeyUp,
    searchWeightOnFocus,
    searchWeightOnBlur,
    searchThumbnailOnChange,
    searchThumbnailOnKeyUp,
    searchThumbnailOnFocus,
    searchThumbnailOnBlur,
    paginationOnClick,
    gnomesObjectsFlexGridOnClick,
    gnomesObjectsFlexGridOnDoubleClick,
  }
}
