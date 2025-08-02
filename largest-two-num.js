function largestTwoNum(arr) {
  if (arr.length < 2) {
    return [];
  } else {
    let num1 = -Infinity;
    let num2 = -Infinity;

    for (let num of arr) {
      if (num > num1) {
        num2 = num1;
        num1 = num;
      } else if (num > num2 && num !== num1) {
        num2 = num;
      }
    }
    return [num1, num2];
  }
}

console.log(largestTwoNum([1, 5, -10, 30, 15]));
//output : [ 30, 15 ]
