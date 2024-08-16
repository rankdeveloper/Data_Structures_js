function firstOccurence(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;

  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

function lastOccurence(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;

  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      start = mid + 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }
  return ans;
}

console.log(
  "First Occurence of 3 , is found at index : ",
  firstOccurence([1, 2, 3, 3, 3, 3, 4, 5], 3)
);
console.log(
  "Last Occurence of 3 , is found at index : ",
  lastOccurence([1, 2, 3, 3, 3, 3, 4, 5], 3)
);

//total no. of occurence formul (lastIndex-firstIndex+1)

let firstIndex = firstOccurence([1, 2, 3, 3, 3, 3, 4, 5], 3);
let lastIndex = lastOccurence([1, 2, 3, 3, 3, 3, 4, 5], 3);

console.log("Total no. of occurence : ", lastIndex - firstIndex + 1);

// output:
// First Occurence of 3 , is found at index :  2
// Last Occurence of 3 , is found at index :  5
// Total no. of occurence :  4
// Last Occurence of 3 , is found at index :  5
// Total no. of occurence :  4
