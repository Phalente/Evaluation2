//Fonction pour lancer le Dé
const faceDice = document.getElementById('dice')
const rollDice = document.getElementById('rollDiceBtn')

let scoreDice = ''

function lancerDe() {   
    scoreDice = Math.floor((Math.random() * 6)+ 1)
//Afficher le résultat
    console.log(scoreDice)
}

faceDice.addEventListener('click',lancerDe)
rollDice.addEventListener('click',lancerDe)
