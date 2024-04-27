function isValid(str) {

    if (str.length < 8 || str.length > 15) {
        return false
    }
    let hasDigit = false, hasLower = false, hasUpper = false, hasSpecialChar = false


    // 0-9 => 48-57
    // A-Z => 65-90
    // a-z => 97-122


    const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*']

    for (let i = 0; i < str.length; i++) {

        const charCode = str.charCodeAt(i)
        // console.log(str.charCodeAt(i))

        //for digit
        if (charCode >= 48 && charCode <= 57) {
            hasDigit = true
        }

        //for uppercase
        else if (charCode >= 65 && charCode <= 90) {
            hasUpper = true
        }

        //for lowercase
        else if (charCode >= 97 && charCode <= 122) {
            hasLower = true
        }

        //for special chars
        else if (specialChar.includes(str[i])) {
            hasSpecialChar = true
        }

    }
    return hasDigit && hasLower && hasUpper && hasSpecialChar && !str.includes(' ')

}

console.log(isValid("Hello@123"))
console.log(isValid("hello@hi"))