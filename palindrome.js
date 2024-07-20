// Palindrome is a number that same after reverse e.g 101 ,55 , 202 , etc
function isPalindrome(num){
    let rem , rev=0;
    let temp=num;

    while(temp!=0){
        rem=temp%10
        rev=rev*10+rem
        temp=Math.floor(temp/10)
    }

    if(rev==num){
        return true;
    }

    return false
}

console.log(isPalindrome(101))
console.log(isPalindrome(50))
console.log(isPalindrome(55))