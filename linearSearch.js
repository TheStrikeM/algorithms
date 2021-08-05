let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
let iterationCount = 0
function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        iterationCount += 1
        if (arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 40));
console.log(`Iteration count: ${iterationCount}`)
