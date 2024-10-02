//Longest Increasing Subsequence (LIS) challenge
function ArrLIS(arr) {
  const n = arr.length;

  const lis = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
}

console.log(ArrLIS([1, 2, 4]));
console.log(ArrLIS([1, 5, 4]));
console.log(ArrLIS([1, 5, 4, 2]));
