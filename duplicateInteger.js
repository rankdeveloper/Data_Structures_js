// You are given an array of size n containing each number between 
// 1 and n. There is a single integer value that is present in the array
// twice . find the duplicate integer value present in the array.

// input: [4,2,1,3,1]
// output: 1


function duplicateInteger(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }


    console.log("sorted array : ")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }


    console.log("duplicate integer is : ")
    for (let i = 0; arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            return arr[i]
        }
    }
    return -1;

}


console.log(duplicateInteger([5, 5, 7, 10]))
//console.log(duplicateInteger([5,7,5,10]))