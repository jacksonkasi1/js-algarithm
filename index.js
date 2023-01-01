const items = [
  [1, 2, 3],
  [4, 5, [6]]
]

function findSix(i) {
  let hasSiz = "no!"
  i.forEach((a) => {
    if (a === 6) {
      hasSiz = "yes!"
    }
    if (Array.isArray(a)) {
      hasSiz = findSix(a)
    }
  })
  return hasSiz
}

console.log(findSix(items))
