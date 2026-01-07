/* eslint-disable no-console */
import { useSelector } from 'react-redux'
import { pageContent, placeholderUnknown } from '../../../library/constant'
import { alertTextInfoGnomes } from '../../../library/constant/alertText/infoGnomes'

export function useInfoGnomeState() {
  const progress = useSelector(({ context }) => context.progress)

  const { gnomesObjects, search, edit } = useSelector(({ ui }) => ui.listGnomes)

  const editedGnomeObject = search?.gnomesObjects?.[edit.index] ?? gnomesObjects[edit.index]

  return {
    placeholderUnknown,
    alertTextInfoGnomes,
    pageContent,
    progress,
    editedGnomeObject,
  }
}
