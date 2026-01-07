import { v4 as uuidv4 } from 'uuid'

export const gnomeProfessionsDefault = [
  {
    id: uuidv4(),
    name: 'Select Profession',
  },
]

export const gnomeProfessions = [
  { id: uuidv4(), name: 'Brewer' },
  { id: uuidv4(), name: 'Medic' },
  { id: uuidv4(), name: 'Prospector' },
  { id: uuidv4(), name: 'Gemcutter' },
  { id: uuidv4(), name: 'Mason' },
  { id: uuidv4(), name: 'Tailor' },
  { id: uuidv4(), name: 'Cook' },
  { id: uuidv4(), name: 'Baker' },
  { id: uuidv4(), name: 'Miner' },
  { id: uuidv4(), name: 'Carpenter' },
  { id: uuidv4(), name: 'Farmer' },
  { id: uuidv4(), name: 'Stonecarver' },
  { id: uuidv4(), name: 'Tax inspector' },
  { id: uuidv4(), name: 'Smelter' },
  { id: uuidv4(), name: 'Tinker' },
  { id: uuidv4(), name: 'Butcher' },
  { id: uuidv4(), name: 'Sculptor' },
  { id: uuidv4(), name: 'Metalworker' },
  { id: uuidv4(), name: 'Blacksmith' },
  { id: uuidv4(), name: 'Potter' },
  { id: uuidv4(), name: 'Mechanic' },
  { id: uuidv4(), name: 'Leatherworker' },
  { id: uuidv4(), name: 'Marble Carver' },
  { id: uuidv4(), name: 'Woodcarver",' },
].sort((a, b) => a.name.localeCompare(b.name))
