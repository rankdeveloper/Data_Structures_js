function maxAdjacentSum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] > max) {
      max = arr[i] + arr[i + 1];
    }
  }
  return max;
}

console.log(maxAdjacentSum([1, 2, 3, 4, 5]));
