function myFunction(len) {
  return Array.from({ length: len }, (n, i) => i + 1);
}

console.log(myFunction(10));
console.log(myFunction(6));
