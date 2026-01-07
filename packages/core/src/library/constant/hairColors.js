import { v4 as uuidv4 } from 'uuid'

export const gnomeHairColorsDefault = [
  {
    id: uuidv4(),
    name: 'Select Hair Color',
  },
]

export const gnomeHairColors = [
  { id: uuidv4(), name: 'Green' },
  { id: uuidv4(), name: 'Red' },
  { id: uuidv4(), name: 'Black' },
  { id: uuidv4(), name: 'Gray' },
  { id: uuidv4(), name: 'Pink' },
].sort((a, b) => a.name.localeCompare(b.name))
