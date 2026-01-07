import { gnomeHairColorsDefault } from '../../../../../library/constant/hairColors'
import { gnomeProfessionsDefault } from '../../../../../library/constant/professions'

export function getListGnomesObjectsByHairColor({ objects, hairColor }) {
  if (!hairColor) {
    return objects
  }

  const selectedObjectHairColorText = hairColor.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectHairColorText === gnomeHairColorsDefault[0].name) {
    return objects
  }

  let objectsByHairColor = []

  objectsByHairColor = [
    ...objectsByHairColor,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => filterObject.hairColor === selectedObjectHairColorText),
  ]

  return objectsByHairColor?.filter((item, position) => objectsByHairColor.indexOf(item) === position)
}

export function getListGnomesObjectsByProfession({ objects, profession }) {
  if (!profession) {
    return objects
  }

  const selectedObjectProfessionText = profession.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectProfessionText === gnomeProfessionsDefault[0].name) {
    return objects
  }

  let objectsByProfession = []

  objectsByProfession = [
    ...objectsByProfession,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => filterObject.professions.includes(selectedObjectProfessionText)),
  ]

  return objectsByProfession?.filter((item, position) => objectsByProfession.indexOf(item) === position)
}

export function getListGnomesObjectsByFriend({ objects, friend }) {
  if (!friend) {
    return objects
  }

  let objectsByFriend = []

  objectsByFriend = [
    ...objectsByFriend,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => filterObject.friends.map((f) => f.toLowerCase()).some((f) => f.includes(friend.toLowerCase()))),
  ]

  return objectsByFriend?.filter((item, position) => objectsByFriend.indexOf(item) === position)
}

export function getListGnomesObjectsByName({ objects, name }) {
  if (!name) {
    return objects
  }

  let objectsByName = []

  objectsByName = [...objectsByName, ...objects.filter((filterObject) => filterObject.name.toLowerCase().includes(name.toLowerCase()))]

  return objectsByName.filter((item, position) => objectsByName.indexOf(item) === position)
}

export function getListGnomesObjectsByAge({ objects, age }) {
  if (!age) {
    return objects
  }

  let objectsByAge = []

  objectsByAge = [
    ...objectsByAge,
    ...objects.filter((filterObject) => filterObject.age.toString().toLowerCase() === age.toString().toLowerCase()),
  ]

  return objectsByAge.filter((item, position) => objectsByAge.indexOf(item) === position)
}

export function getListGnomesObjectsByHeight({ objects, height }) {
  if (!height) {
    return objects
  }

  let objectsByHeight = []

  objectsByHeight = [
    ...objectsByHeight,
    ...objects.filter((filterObject) => Math.trunc(filterObject.height).toString().toLowerCase() === height.toString().toLowerCase()),
  ]

  return objectsByHeight.filter((item, position) => objectsByHeight.indexOf(item) === position)
}

export function getListGnomesObjectsByWeight({ objects, weight }) {
  if (!weight) {
    return objects
  }

  let objectsByWeight = []

  objectsByWeight = [
    ...objectsByWeight,
    ...objects.filter((filterObject) => Math.trunc(filterObject.weight).toString().toLowerCase() === weight.toString().toLowerCase()),
  ]

  return objectsByWeight.filter((item, position) => objectsByWeight.indexOf(item) === position)
}

export function getListGnomesObjectsByThumbnail({ objects, thumbnail }) {
  if (!thumbnail) {
    return objects
  }

  let objectsByThumbnail = []

  objectsByThumbnail = [
    ...objectsByThumbnail,
    ...objects.filter((filterObject) => filterObject.thumbnail?.toLowerCase().includes(thumbnail?.toLowerCase())),
  ]

  return objectsByThumbnail.filter((item, position) => objectsByThumbnail.indexOf(item) === position)
}

export function getListGnomesSearch({ search, newSearchGnomesObjects }) {
  let newSearch

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? null
      : getListGnomesObjectsByHairColor({
          objects: newSearchGnomesObjects,
          hairColor: search?.hairColor,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByProfession({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          profession: search?.profession,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByFriend({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          friend: search?.friend,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByName({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          name: search?.name,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByAge({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          age: search?.age,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByHeight({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          height: search?.height,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByWeight({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          weight: search?.weight,
        }),
  }

  newSearch = {
    hairColor: search?.hairColor,
    profession: search?.profession,
    friend: search?.friend,
    thumbnail: search?.thumbnail,
    name: search?.name,
    age: search?.age,
    height: search?.height,
    weight: search?.weight,
    gnomesObjects: !search
      ? newSearch?.gnomesObjects
      : getListGnomesObjectsByThumbnail({
          objects: newSearch?.gnomesObjects || newSearchGnomesObjects,
          name: search?.thumbnail,
        }),
  }

  return newSearch
}
