const arr = [1, 2, 3, [10, 20, 30], 4, {}]
let flattendArr = []

function flattenArray(arr, flattendArr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], flattendArr)
        }

        else {
            flattendArr.push(arr[i])
        }
    }

    return flattendArr
}

console.log(flattenArray(arr, flattendArr))
console.log(flattenArray([1,2,3,{test:1},[10,40]], []))