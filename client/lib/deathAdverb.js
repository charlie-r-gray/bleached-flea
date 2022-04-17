const deathAdverbArr = [
  ` ignobly`,
  ` shamefully`,
  ` messily`,
  ` with regrets`,
  `. That'll show 'em`,
]

export function deathAdverb() {
  return deathAdverbArr[Math.floor(Math.random() * deathAdverbArr.length)]
}

export default deathAdverb
