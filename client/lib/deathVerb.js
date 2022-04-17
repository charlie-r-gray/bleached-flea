const deathVerbArr = [
  `died`,
  `perished`,
  `returned to the earth`,
  `were bodied`,
  `sucked`,
]

export function deathVerb() {
  return deathVerbArr[Math.floor(Math.random() * deathVerbArr.length)]
}

export default deathVerb
