window.addEventListener('DOMContentLoaded', (e) => {
    console.log("Javascript Loaded Correctly!");
    enemyHealth.innerHTML = ("HP: " + currentEnemyHealth)
    fightButton.addEventListener("click", (e) => {
        console.log("Fight Button Pushed!")
        menu1.style.opacity = 0;
        menu2.style.opacity = 1;
    })
    pkmnButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "Sorry, you're all out of Pokemon!"
    })
    itemButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "You used a potion! HP increased by 10."

    })
    runButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "Why are you trying to run? We're trying to do a presentation."
    })
    firstMove.addEventListener("click", (e) => {
        console.log(playerAttack(10, 15))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(10, 15))
        enemyMoveSelect(0, 4)
        console.log(enemyMoveSelect(0, 4))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    secondMove.addEventListener("click", (e) => {
        console.log(playerAttack(15, 25))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(15, 25))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    thirdMove.addEventListener("click", (e) => {
        console.log(playerAttack(25, 35))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(25, 35))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    fourthMove.addEventListener("click", (e) => {
        console.log(playerAttack(40, 60))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(40, 60))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
})

// audio on load **not implemented**
// audio on victory **not implemented**

// action buttons defined
let fightButton = document.querySelector("#fight")
let pkmnButton = document.querySelector("#pkmn")
let itemButton = document.querySelector("#item")
let runButton = document.querySelector("#run")

// menu 1 options
let menu1 = document.querySelector(".buttons")

// move buttons defined
let firstMove = document.querySelector("#slash")
let secondMove = document.querySelector("#fly")
let thirdMove = document.querySelector("#earthquake")
let fourthMove = document.querySelector("#fireblast")

// hp of players defined
let enemyHealth = document.querySelector("#enemyHpBar")
let playerHealth = document.querySelector("#playerHpBar")
let currentEnemyHealth = 100;
let currentPlayerHealth = 100;
let playerHpDisplay = document.querySelector("#playerHpDisplay")
let enemyHpDisplay = document.querySelector("#enemyHpDisplay")

// menu 2 options
let menu2 = document.querySelector(".moves")

// sets the min max value of damage
const playerAttack = (min, max) => {
    // use a for loop here if (return < 1) else this to trigger the event
    // define returnNum ahead of time
    return Math.floor(Math.random() * (max - min) + min);
}



// enemy retaliation 
const enemyMoveSelect = (min, max) => {
    let enemyChoice = Math.floor(Math.random() * (max - min) + min);
    if (enemyChoice === 0) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= playerAttack(10, 15))
    } else if (enemyChoice === 1) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= playerAttack(15, 25))    
    } else if (enemyChoice === 2) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= playerAttack(25, 30))
    } else if (enemyChoice === 3) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= playerAttack(40, 60))
    }
    return enemyChoice
}


// for accuracy checks, set returnNum as a constant
// const returnNum = Math.floor(Math.random() * (max - min) + min)

    // create a function to check if HP drops below 0 to reprint 0 back as a HP: 0

const checkEnemyAlive = () => {
    if (currentEnemyHealth <= 0) {
        enemyHealth.innerHTML = "HP: " + 0
    } else {
        console.log("Enemy still Alive!")
    }
}

const checkPlayerAlive = () => {
    if (currentPlayerHealth <= 0) {
        playerHealth.innerHTML = "HP: " + 0
    } else {
        console.log("Player still Alive!")
    }
}

// function for hp bar update

const enemyHpCheck = () => {
    if (currentEnemyHealth < 80 && currentEnemyHealth > 60) {
        enemyHpDisplay.src="assets/HP Bar Split/4 Bar HP.png"
    } else if (currentEnemyHealth < 60 && currentEnemyHealth > 40) {
        enemyHpDisplay.src="assets/HP Bar Split/3 Bar HP.png"
    } else if (currentEnemyHealth < 40 && currentEnemyHealth > 20) {
        enemyHpDisplay.src="assets/HP Bar Split/2 Bar HP.png"
    } else if (currentEnemyHealth < 20 && currentEnemyHealth > 0) {
        enemyHpDisplay.src="assets/HP Bar Split/1 Bar HP.png"
    } else if (currentEnemyHealth <= 0)
        enemyHpDisplay.src="assets/HP Bar Split/0 Bar HP.png"
    }

const playerHpCheck = () => {
    if (currentPlayerHealth < 80 && currentPlayerHealth > 60) {
        playerHpDisplay.src="assets/HP Bar Split/4 Bar HP.png"
    } else if (currentPlayerHealth < 60 && currentPlayerHealth > 40) {
        playerHpDisplay.src="assets/HP Bar Split/3 Bar HP.png"
    } else if (currentPlayerHealth < 40 && currentPlayerHealth > 20) {
        playerHpDisplay.src="assets/HP Bar Split/2 Bar HP.png"
    } else if (currentPlayerHealth < 20 && currentPlayerHealth > 0) {
        playerHpDisplay.src="assets/HP Bar Split/1 Bar HP.png"
    } else if (currentPlayerHealth <= 0)
        playerHpDisplay.src="assets/HP Bar Split/0 Bar HP.png"
    }
