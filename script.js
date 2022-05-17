//Lancer le Dé

//Déclaration de variable
const dice = document.getElementById('dice')
const rollDice = document.getElementById('rollDiceBtn')
const diceFace = document.getElementById('diceFace')
let scoreDice = ''


//Déclaration des fonctions

function lancerDe() {   
    scoreDice = Math.floor((Math.random() * 6)+ 1)
    changeDiceFace()
//Afficher le résultat
    console.log(scoreDice)
}

function changeDiceFace() {
    diceFace.src=`../images/dice-${scoreDice}.svg`
}

//Déclaration des événements sur le Dom
dice.addEventListener('click',lancerDe)
rollDice.addEventListener('click',lancerDe)

