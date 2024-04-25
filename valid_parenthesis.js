// eg: "(){}"
function validParenthesis(str) {

    let stack = []

    for (let i = 0; i < str.length; i++) {

        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i])
            continue;
        }

        if(stack.length==0){
            return false;
        }

        let result=stack.pop();

        switch (str[i]) {
            case ')': if (result!=='(') { return false }
                break;

            case '}': if (result!=='{') { return false }
                break;

            case ']': if (result!=='[') { return false }
                break;
        }

        
    }
    return (stack.length === 0)


}

console.log(validParenthesis("(){}"))