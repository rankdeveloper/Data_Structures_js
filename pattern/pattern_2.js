// Output :
// *
// **
// ***
// ****

// input : 4

const starPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};

starPattern(4);
