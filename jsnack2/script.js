const number = [3, 5, 2, 6, 8, 10, 23, 21, 9, 30, 70, 65];
console.log(number);

let sum = 0;

for( let i = 1; i < number.length; i+=2){
    console.log("*****");
    // // console.log(i)
    let oddNumber = number[i];
    console.log(oddNumber);

    sum += oddNumber;                 
    console.log(i);
}

console.log("**********");
console.log(sum);