// Output :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Approach 1 : Using nested loop
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
