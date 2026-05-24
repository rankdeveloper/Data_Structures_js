// Output :
//      *
//    * *
//  * * *
//* * * *

// Input : 4

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = " ";

    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }

    for (let k = 0; k <= i; k++) {
      row += "*";
    }

    console.log(row);
  }
};

pattern(4);
