function chunkArray(arr , size){
    const chunkArr=[]

    for(let i=0; i<arr.length; i++){

        chunkArr.push(arr.slice(i,i+size))
    }

    return chunkArr
}

console.log(chunkArray([1,2,3,4,5],2))
console.log(chunkArray([10,15,16,5] , 3))
// [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5 ] ]
// [ [ 10, 15, 16 ], [ 15, 16, 5 ], [ 16, 5 ], [ 5 ] ]