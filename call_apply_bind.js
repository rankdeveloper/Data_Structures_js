const obj ={
    id:1,
    name:'Rohit Sharma',
  
}

const obj2={
    id:2,
    name:'Shreyas Iyer'
}

const obj3={
    id:3 ,
    name:'Bumrah'
}

function intro(city , name){
    console.log('Hi i am ',this.name , ' from ' , city)
}

//call : it invokes the function immediately with specified this value 
//and invidualt args
intro.call(obj , 'Chandigarh')

//apply : same as call() but it takes second arguement as array []
intro.apply(obj2 , ['Mumbai'])

//bind : same as bind() but it returns a new function when called
const bindFunc = intro.bind(obj3 , 'Gujrat')
bindFunc()
