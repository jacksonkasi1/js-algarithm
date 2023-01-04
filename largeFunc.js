const itmesSort = [1, 3, 4, 7, 6, 9, 5]

function findLargestValue(list) {
  let lrg = list[0]
  let indexOfLarge = 0
  for (let i = 1; i <= list.length; i++) {
    if (lrg < list[i]) {
      lrg = list[i]
      indexOfLarge = i
    }
  }
  return indexOfLarge
}

const result = findLargestValue(itmesSort)
console.log(result)

// --- selectionShort ---

function selectionShort(list) {
  const newList = []
  let lrgItem
  while (list.length) {
      lrgItem = findLargestValue(list)
      newList.push(list[lrgItem])
      list.splice(lrgItem, 1)
  }
  return newList
}

const result2 = selectionShort(itmesSort)
console.log(result2)
