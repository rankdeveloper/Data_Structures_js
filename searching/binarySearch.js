function bSearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] == key) {
      return mid;
    }
    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return -1;
}

const arr = [1, 2, 4, 8, 9];
console.log(bSearch(arr, 4));
// bSearch(arr, 4);
