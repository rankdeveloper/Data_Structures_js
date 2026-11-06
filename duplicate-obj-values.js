function findDuplicateValues(obj) {
  const values = Object.values(obj);
  const s = new Set();
  const duplicates = [];

  for (let i = 0; i < values.length; i++) {
    if (s.has(values[i])) {
      duplicates.push(values[i]);
    } else {
      s.add(values[i]);
    }
  }

  return duplicates;
}

// Example :
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 2,
  e: 4,
  f: 1,
};
console.log(findDuplicateValues(obj));

// output : [ 2, 1 ]
