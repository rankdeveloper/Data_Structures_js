let obj ={
    name:'Rohit Sharma',
    age:35,
    greet:() => {
        const arrowGreet = () => {
            console.log('Hi i am ' , this.name)
        }
        arrowGreet()
    }
}
console.log("this keyword")
obj.greet()


class MyClass{
    constructor(name , age){
        this.name = name,
        this.age = age

        this.obj={
            name:this.name,
            age:this.age
        }
    }
   
}

const person = new MyClass('Shreyas')
console.log(person.obj.name)
