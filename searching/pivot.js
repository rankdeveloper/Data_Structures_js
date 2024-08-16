function getPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start < end) {
    if (arr[mid] > arr[0]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }

  return end;
}

console.log(getPivot([3, 8, 10, 17, 1, 4]));
