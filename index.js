function waldo(array) {
    let result = []
    let column;
    let row;
    let unique = ""
    let obj = {}
    let newArr = []
    array.forEach(element => {
        newArr.push(element)
    })
​
​
    newArr = newArr.join().split(',')
​
    newArr.forEach(element => {
        if (!obj[element]) {
            obj[element] = 1
        } else { obj[element] += 1 }
    })
​
    for (const key in obj) {
​
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === 1) {
                unique = key
​
            }
        }
    }
​
    array.forEach(element => {
​
        if (element.includes(unique)) {
​
            column = array.indexOf(element) + 1
        }
​
        for (let index = 0; index < element.length; index++) {
            if (element[index] === unique) {
                row = index + 1
            }
​
        }
    })
​
    result.push(column)
    result.push(row)
​
    return result
}