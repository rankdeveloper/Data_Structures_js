const largestAndSecondLargest = (array) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
      secondLargest = array[i];
    }
  }
  return [firstLargest, secondLargest];
};

console.log(largestAndSecondLargest([1, 5, -10, 30, 15]));
//output : [ 30, 15 ]
