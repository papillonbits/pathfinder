export function isNumericInput(event) {
  return /^\d*$/.test(event.target.value) && event.key !== 'Backspace' && event.key !== 'Delete'
}
