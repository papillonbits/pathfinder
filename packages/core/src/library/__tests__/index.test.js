import { isNumericInput } from '../index'

describe('isNumericInput', () => {
  describe('when value is numeric', () => {
    test('should return true for digits with regular key', () => {
      const event = { target: { value: '123' }, key: 'a' }
      expect(isNumericInput(event)).toBe(true)
    })

    test('should return true for empty string with regular key', () => {
      const event = { target: { value: '' }, key: 'Enter' }
      expect(isNumericInput(event)).toBe(true)
    })

    test('should return false when key is Backspace', () => {
      const event = { target: { value: '123' }, key: 'Backspace' }
      expect(isNumericInput(event)).toBe(false)
    })

    test('should return false when key is Delete', () => {
      const event = { target: { value: '456' }, key: 'Delete' }
      expect(isNumericInput(event)).toBe(false)
    })
  })

  describe('when value is non-numeric', () => {
    test('should return false for alphabetic characters', () => {
      const event = { target: { value: 'abc' }, key: 'a' }
      expect(isNumericInput(event)).toBe(false)
    })

    test('should return false for mixed alphanumeric', () => {
      const event = { target: { value: '123abc' }, key: 'b' }
      expect(isNumericInput(event)).toBe(false)
    })

    test('should return false for special characters', () => {
      const event = { target: { value: '12.34' }, key: '.' }
      expect(isNumericInput(event)).toBe(false)
    })

    test('should return false for spaces', () => {
      const event = { target: { value: '12 34' }, key: ' ' }
      expect(isNumericInput(event)).toBe(false)
    })
  })
})
