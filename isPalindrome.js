// Leetcode : Valid palindrome
// Input: s = "A man, a plan, a canal: Panama"
// Output: true

function isPalindrome(str) {
  let a = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversed = a.split("").reverse().join("");
  return a === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
