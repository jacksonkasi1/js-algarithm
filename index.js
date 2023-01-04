const items = [
  [1, 2, 3],
  [1, 2, [3, [4, [5, [6, [[[[[7], [8, 9]]]]]]], 10]]]
]

function findSix(i) {
  let hasSiz = "no!"
  if (Array.isArray(i)) {
    i.forEach((item) => {
      if (item === 6) {
        hasSiz = "yes!"
      }
    })
  }
  return hasSiz
}

// function findSixDeep(i) {
//   let hasSiz = "no!"
//   if (Array.isArray(i)) {
//     i.forEach((item) => {
//       if (item === 6) {
//         hasSiz = "yes!"
//       } else {
//         hasSiz = findSixDeep(item)
//       }
//     })
//   }
//   return hasSiz
// }

function findSixDeep (item) {
  if (Array.isArray(item)) {
    return item.some(i => findSixDeep(i))
  }
  return item === 10
}

console.log(findSixDeep(items))