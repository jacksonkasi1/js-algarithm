function sum(arr) {
    if(arr.length === 0) return 0
    console.log("data=", arr[0] + sum(arr.slice(1)))
    return arr[0] + sum(arr.slice(1))
}

const result = sum([1,2,3,4,5])

console.log(result)
