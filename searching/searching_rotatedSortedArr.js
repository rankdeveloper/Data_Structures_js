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

//   console.log(getPivot([3, 8, 10, 17, 1, 4]));

function bSearch(arr, s, e, key) {
  let start = s;
  let end = e;
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

function findPosition(arr, n, key) {
  let pivot = getPivot(arr);

  if (key >= arr[pivot] && key <= arr[n - 1]) {
    return bSearch(arr, pivot, n - 1, key);
  } else {
    return bSearch(arr, 0, pivot - 1, key);
  }
}

console.log(findPosition([5, 6, 7, 8, 9, 10, 1, 2, 3], 9, 2));
//output : 7
