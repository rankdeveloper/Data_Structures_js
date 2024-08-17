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

console.log("Square root of 36 : ", getSquareRoot(36));
console.log("Square root of 8 : ", getSquareRoot(8));

let tempSol = getSquareRoot(36);

console.log("Square root of 39 : ", morePrecision(39, 3, tempSol));

function morePrecision(n, precision, tempSol) {
  let factor = 1;
  let ans = tempSol;
  for (let i = 0; i < precision; i++) {
    factor = factor / 10;

    for (let j = ans; j * j <= n; j = j + factor) {
      ans = j;
    }
  }
  return ans;
}
