const nameList = ["Simone", "Francesco", "Nicola", "Carlo", "Gianluca", "Valerio", "Pietro", "Riccardo", "Giulia"];
const surnameList = ["Leone", "Giuri", "Filograna", "Corluccio", "Presta", "Corrado", "Linza", "Fiori", "Spiller"];
console.log(nameList);
console.log(surnameList);


for(let i = 0; i < nameList.length; i++){
    const randomNameIndex = Math.floor(Math.random() * 9) ;
    const randomSurnameIndex = Math.floor(Math.random() * 9) ;
    
    const currentName = nameList[randomNameIndex];
    const currentSurname = surnameList[randomSurnameIndex];

    const completeName = (currentName + " " + currentSurname);
    console.log(completeName)
}


