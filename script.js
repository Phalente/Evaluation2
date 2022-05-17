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



//Player 1 - Score Current

//Déclaration de variable
const player1CurrentScore = document.getElementById('player1CurrentScore')
const player1GlobalScore = document.getElementById('player1GlobalScore')
const player2CurrentScore = document.getElementById('player2CurrentScore')
const player2GlobalScore = document.getElementById('player2GlobalScore')

let player1
let player2


class Player{
    constructor(currentScore, globalScore)
        this.currentScore = currentScore 
        this.globalScore = globalScore

    function resultCurrent(){
        if (scoreDice > 1){
            currentScore = scoreDice + currentScore
        }
    }

    function resultGlobal(){
        globalScore = currentScore + globalScore
    }

    
}









