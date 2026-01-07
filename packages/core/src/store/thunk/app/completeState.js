import { bindActionCreators } from 'redux'
import * as actionCreators from '../../action/actionCreators'
import { appState } from '../../../state/default'
import { getGnomesData, getGnomes } from './index'
import { timeout, messageType } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'
import { alertTextListGnomes } from '../../../library/constant/alertText/listGnomes'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const { contextSetNavigationAction, contextSetProgressAction, uiSetListGnomesAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: alertTextListGnomes.action.set.progress,
      type: messageType.info,
    },
    isLoading: true,
  })

  const getGnomesResponseData = await getGnomesData({ dispatch })

  uiSetListGnomesAction(getGnomes({ gnomes: getGnomesResponseData }))

  contextSetNavigationAction(appState.context.navigation)

  contextSetProgressAction({
    message: {
      text: alertTextListGnomes.action.set.success,
      type: messageType.success,
    },
    isLoading: false,
  })

  setTimeout(() => {
    contextSetProgressAction({
      message: {
        text: alertTextApp.ready,
        type: messageType.success,
      },
      isLoading: false,
    })
  }, timeout.fetch)
}
