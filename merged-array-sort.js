function mergedArraySort(arr1, arr2) {
  const mergedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArray[i] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    mergedArray[arr1.length + j] = arr2[j];
  }

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length - i - 1; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
      }
    }
  }
  return mergedArray;
}

console.log(mergedArraySort([1, 5, 3], [2, 4, 7, 6]));
