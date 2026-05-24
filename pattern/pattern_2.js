// Output :
// *
// **
// ***
// ****

// input : 4

// 2nd question
// Output :
// * * * *
// * * *
// * *
// *

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

console.log("_________________________");
console.log("2nd Ouptut");

const starPattern2 = (num) => {
  for (let i = 0; i < num; i++) {
    let row = " ";

    for (let j = 0; j < num - i; j++) {
      row += "*" + " ";
    }

    console.log(row);
  }
};

starPattern2(5);
