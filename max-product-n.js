function maxProduct_n(array,n) {

    if(array.length==0 || n<=0) return [];
    const sortedArray = [...array].sort((a,b) => b-a);
    const elements =  sortedArray.slice(0,n);

    let product=1;

    for(let i=0; i<elements.length; i++){
        product = product * elements[i];
    }


    return product;
}
console.log(maxThreeElements_Product([10,5,20,7,15] , 3)
