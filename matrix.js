let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
]

let product = 0;
let sum=0;
for (let i = 0; i < matrix[0].length; i++) {

    // console.log(matrix[i][0])
    product = matrix[i][0]

    for (let j = 1; j < matrix[1].length; j++) {
        console.log(matrix[i][j])
        product *= matrix[i][j]
    }
    sum += product

}

console.log('sum' , sum)