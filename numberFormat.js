//Input : 123456789
//Output : 12,345.6789

function numberFormat(num1, num2) {
  let result = num1 / num2;

  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 4,
    minimumFractionDigits: 4,
  }).format(result);
}

console.log(numberFormat(10, 20));
console.log(numberFormat(123456789, 10000));

//Input : 10 , 20
//Output : 0.5

//Input : 123456789
//Output : 12,345.6789
