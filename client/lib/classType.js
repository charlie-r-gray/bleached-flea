// setting a character class

const classTypeArr = [`monk`, `warrior`, `mage`, `rogue`, `artist`]

export function classType() {
  return classTypeArr[Math.floor(Math.random() * classTypeArr.length)]
}

export default classType
