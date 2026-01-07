export function uiSetListGnomes(state, action) {
  return {
    ...state,
    listGnomes: action.payload,
  }
}
