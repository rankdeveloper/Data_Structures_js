function getSquareRoot(n) {
  let start = 0;
  let end = n;
  let mid = Math.floor((start + end) / 2);

  let ans = -1;

  while (start <= end) {
    let square = mid * mid;

    if (square == n) {
      return mid;
    }

    if (square < n) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return ans;
}

console.log(getSquareRoot(36));
console.log(getSquareRoot(8));
