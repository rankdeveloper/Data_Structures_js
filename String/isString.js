function isString(text) {
  return Object.prototype.toString.call(text) == "[object String]";
}

console.log("It is string or not : ", isString("hello"));
console.log("It is string or not : ", isString(123));
