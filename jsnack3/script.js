const firstGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(firstGroup)
const secondGroup = [ 1, 2, 3, 4, 5];

for(let i = 0; i < firstGroup.length; i++){
    const randomNumber = Math.floor(Math.random() * 9)
    secondGroup.push(randomNumber);

    console.log("********");
    console.log(secondGroup)

    if (secondGroup.length >= firstGroup.length){
        break    
    }
}