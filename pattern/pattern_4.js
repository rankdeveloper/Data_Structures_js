// Output :
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// Approach 1 : Using nested loop
// Input : 5

const pattern = (num) => {
  for (let i = 0; i < num; i++) {
    let row = " ";

    for (let j = 0; j <= i; j++) {
      row += i + 1 + " ";
    }
    console.log(row);
  }
};

pattern(5);
