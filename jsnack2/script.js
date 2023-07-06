const number = [3, 5, 2, 6, 8, 10, 23, 21, 9, 30, 70, 65]
console.log(number);


for( let i = 0; i < number.length; i++){
    i = (i + 1) ;
    if ( i >= number.length){
        break
    }
    // console.log(i)
    let oddNumber = number[i]
    console.log(oddNumber)   
}
