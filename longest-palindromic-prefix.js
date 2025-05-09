function longestPalindromicPrefix(str){

    for(let i=str.length; i>0; i--){
        let prefix = str.substring(0,i);
        if(prefix ===prefix.split('').reverse().join('')){
            return prefix;
        }
    }
    return "";
}
//console.log(longestPalindromicPrefix("mammyom"));
//Output : 'mam'
