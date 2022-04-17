// randomising a class subtype (or modifier, if you will)

const classSubArr = [
  `gravity`,
  `poisonous`,
  `fae-touched`,
  `herbal`,
  `eldritch`,
]

export function classSub() {
  return classSubArr[Math.floor(Math.random() * classSubArr.length)]
}

export default classSub
