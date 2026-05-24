// Output :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Approach 1 : Using nested loop
// Input : 5

// Output 2 :
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// Approach 2 : Using nested loop
// Input : 5

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let row = " ";

    for (let j = 1; j <= i + 1; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

pattern(5);

console.log("_______________________________");
console.log("Output 2 :");

function pattern2(num) {
  for (let i = 0; i < num; i++) {
    let row = " ";
    for (let j = 0; j < num - i; j++) {
      row += j + 1 + " ";
    }
    console.log(row);
  }
}

pattern2(5);
