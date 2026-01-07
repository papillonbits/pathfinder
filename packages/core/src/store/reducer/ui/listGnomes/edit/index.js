export function uiSetListGnomesEdit(state, action) {
  return {
    ...state,
    listGnomes: {
      ...state.listGnomes,
      edit: { ...action.payload },
    },
  }
}
