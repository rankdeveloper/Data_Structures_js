//Armstrong : It is the number , sum of digits of cubes equal to the number , e.g 153 : 1^3+5^3+3^3 = 153

function isArmstrong(num) {
    let rem, sum = 0;
    let temp = num;

    while (temp > 0) {
        rem = temp % 10
        sum += (rem * rem * rem)
        temp = Math.floor(temp / 10)
    }

    return num == sum ? true : false
}

console.log(isArmstrong(153))
console.log(isArmstrong(155))