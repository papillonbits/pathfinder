import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { propTypes } from './ListGnomeTemplate.prop'
import { useListGnomeState } from './ListGnomeTemplate.hook'
import styles from './ListGnomeTemplate.scss'

export function ListGnomeTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Dropdown: { Dropdown, dropdownState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridState },
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    container,
    alert,
    content,
    contentDisplay,
    contentDisplaySearch,
    contentDisplaySearchPart,
    contentDisplaySearchPartField,
    contentDisplaySearchPartFieldDropdown,
    contentDisplaySearchPartFieldInput,
    contentDisplayGridListGnomes,
    contentDisplayPagination,
  } = styles

  const {
    alertTextListGnomes,
    pageContent: {
      listGnome: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomGnomesObjectsNamesValues,
    searchHairColorOnClick,
    searchProfessionOnClick,
    searchFriendOnChange,
    searchFriendOnKeyUp,
    searchFriendOnFocus,
    searchFriendOnBlur,
    searchThumbnailOnChange,
    searchThumbnailOnKeyUp,
    searchThumbnailOnFocus,
    searchThumbnailOnBlur,
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
    paginationOnClick,
    gnomesObjectsFlexGridOnClick,
    gnomesObjectsFlexGridOnDoubleClick,
  } = useListGnomeState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.name || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type name to search."
                  ariaAttr={{ label: 'Type in name' }}
                  onChange={searchNameOnChange}
                  onKeyUp={searchNameOnKeyUp}
                  onFocus={searchNameOnFocus}
                  onBlur={searchNameOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.age || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type age to search."
                  ariaAttr={{ label: 'Type in age' }}
                  onChange={searchAgeOnChange}
                  onKeyUp={searchAgeOnKeyUp}
                  onFocus={searchAgeOnFocus}
                  onBlur={searchAgeOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.height || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type height to search."
                  ariaAttr={{ label: 'Type in height' }}
                  onChange={searchHeightOnChange}
                  onKeyUp={searchHeightOnKeyUp}
                  onFocus={searchHeightOnFocus}
                  onBlur={searchHeightOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.weight || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type weight to search."
                  ariaAttr={{ label: 'Type in weight' }}
                  onChange={searchWeightOnChange}
                  onKeyUp={searchWeightOnKeyUp}
                  onFocus={searchWeightOnFocus}
                  onBlur={searchWeightOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.hairColor?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.hairColor}
                  onClick={searchHairColorOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.profession?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.profession}
                  onClick={searchProfessionOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.friend || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type friend to search."
                  ariaAttr={{ label: 'Type in friend' }}
                  onChange={searchFriendOnChange}
                  onKeyUp={searchFriendOnKeyUp}
                  onFocus={searchFriendOnFocus}
                  onBlur={searchFriendOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.thumbnail || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type thumbnail to search."
                  ariaAttr={{ label: 'Type in thumbnail' }}
                  onChange={searchThumbnailOnChange}
                  onKeyUp={searchThumbnailOnKeyUp}
                  onFocus={searchThumbnailOnFocus}
                  onBlur={searchThumbnailOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
          </div>
          {paginatedRandomGnomesObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextListGnomes.display.noGnomes}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridListGnomes}
            items={paginatedRandomGnomesObjectsNamesValues}
            idIndex={0}
            sort={sort}
            onClick={gnomesObjectsFlexGridOnClick}
            onDoubleClick={gnomesObjectsFlexGridOnDoubleClick}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

ListGnomeTemplate.propTypes = propTypes
