function peakIndex(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start < end) {
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }

    mid = Math.floor((start + end) / 2);
  }
  return end;
}

console.log(peakIndex([1, 2, 5, 7, 10, 3, 1]));
//output : 4
