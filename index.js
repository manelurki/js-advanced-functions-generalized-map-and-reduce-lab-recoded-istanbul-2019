// // Add your functions here
function reduce(array, fn, start = null) {
    let total
    if (start == null) {
        total = array[0]
        for (let index = 1; index < array.length; index++) {
            total = fn(total, array[index], array)
        }
        return total;
    } else {
        total = start
        for (let index = 0; index < array.length; index++) {
            total = fn(total, array[index], array)
        }
        return total;
    }
}
function reduce(arr, fn, startingValue = 0) {
    let sum = 0
    let memo = 0
    for (let i = 1; i < arr.length; i++) {
        memo += arr[i - 1]
        sum = fn(arr[i], memo + startingValue)
    }
    return sum
}