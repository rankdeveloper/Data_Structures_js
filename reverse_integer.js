
function reverseNum(num) {
    let rev = 0, rem;
    while (num != 0) {
        rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);

        // console.log(rem ," ",rev , " " , num)
    }

    return rev;

}

console.log(reverseNum(120))


