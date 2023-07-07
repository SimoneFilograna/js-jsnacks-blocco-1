const nameList = ["Simone", "Francesco", "Nicola", "Carlo", "Gianluca", "Valerio", "Pietro", "Riccardo", "Giulia"];
const surnameList = ["Leone", "Giuri", "Filograna", "Corluccio", "Presta", "Corrado", "Linza", "Fiori", "Spiller"];
console.log(nameList);
console.log(surnameList);

const listaInvitati = [];


for(let i = 0; i < 30; i++){
    const randomNameIndex = Math.floor(Math.random() * 9) ;
    // il +9 indica la lunghezza del coprrispottivo array. In questo caso name.length
    const randomSurnameIndex = Math.floor(Math.random() * 9) ;
    
    const currentName = nameList[randomNameIndex];
    const currentSurname = surnameList[randomSurnameIndex];

    const completeName = (currentName + " " + currentSurname);
    console.log(completeName)

    listaInvitati.push(completeName);
}

console.log(listaInvitati)

