//create a function that will generate  the Fibonacci series up to the nth 
// and should return in the form of array

function fiboSeries(num) {
    let arr = [];

    if (num == 0) return arr;
    if (num == 1){
        arr.push(0)
        return arr
    }

    if (num > 1) {
      
        let prev = 0;
        let next = 1;
        let sumPrev;
        arr.push(prev, next)

        for (let i = 2; i < num; i++) {
            sumPrev = prev + next;
            prev = next;
            next = sumPrev;
            arr.push(next)
        }
        return arr

    }
 
}

console.log(fiboSeries(5))
console.log(fiboSeries(0))
console.log(fiboSeries(1))
// output:
// [ 0, 1, 1, 2, 3 ]
// []
// [ 0 ]