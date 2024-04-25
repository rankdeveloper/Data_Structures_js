var map = new Map()
map.set('I', 1)
map.set('V', 5)
map.set('X', 10)
map.set('L', 50)
map.set('C', 100)
map.set('D', 500)
map.set('M', 1000)

//getting value
console.log(map.get('I'))


function romanToInger(str) {
    var output = 0;

    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && map.get(str.charAt(i)) < map.get(str.charAt(i + 1))) {
            output += map.get(str.charAt(i + 1)) - map.get(str.charAt(i))
        }
        else {
            output += map.get(str.charAt(i))
        }
    }

    return output;

}

console.log(romanToInger('XXV'))



