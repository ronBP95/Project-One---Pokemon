window.addEventListener('DOMContentLoaded', (e) => {
    console.log("Javascript Loaded Correctly!");
    enemyHealth.innerHTML = ("HP: " + currentEnemyHealth)
    pokemonEncounter(1, 152)
    fightButton.addEventListener("click", (e) => {
        console.log("Fight Button Pushed!")
        menu1.style.opacity = 0;
        menu2.style.opacity = 1;
    })
    pkmnButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "Sorry, you're all out of Pokemon!"
    })
    itemButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "You used a potion! HP increased by 15. Watch out! The enemy might have healed too."
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth += 15)
        enemyPotion(0, 2)
        potionCap()
        enemyPotionCap()
        noUsePotion()
        hpUpPlayer()
        hpUpEnemy()
    })
    runButton.addEventListener("click", (e) => {
        document.getElementsByTagName("h5")[0].innerHTML = "Why are you trying to run? Go out there and fight!"
    })
    firstMove.addEventListener("click", (e) => {
        console.log(playerAttack(10, 15))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(10, 15))
        attackNote()
        enemyMoveSelect(0, 4)
        console.log(enemyMoveSelect(0, 4))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        playerWin()
        playerLoss()
        playerDraw()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
        menuVanishPlayer()
        menuVanishEnemy()
    })
    secondMove.addEventListener("click", (e) => {
        console.log(playerAttack(15, 25))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(15, 25))
        attackNote()
        enemyMoveSelect(0, 4)
        console.log(enemyMoveSelect(0, 4))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        playerWin()
        playerLoss()
        playerDraw()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
        menuVanishPlayer()
        menuVanishEnemy()
    })
    thirdMove.addEventListener("click", (e) => {
        console.log(playerAttack(25, 35))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(25, 35))
        attackNote()
        enemyMoveSelect(0, 4)
        console.log(enemyMoveSelect(0, 4))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        playerWin()
        playerLoss()
        playerDraw()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
        menuVanishPlayer()
        menuVanishEnemy()
    })
    fourthMove.addEventListener("click", (e) => {
        console.log(playerAttack(40, 60))
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth -= playerAttack(40, 60))
        attackNote()
        enemyMoveSelect(0, 4)
        console.log(enemyMoveSelect(0, 4))
        checkEnemyAlive()
        checkPlayerAlive()
        enemyHpCheck()
        playerHpCheck()
        playerWin()
        playerLoss()
        playerDraw()
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
        menuVanishPlayer()
        menuVanishEnemy()
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
    return Math.floor(Math.random() * (max - min) + min);
}

const enemyAttack = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}



// enemy retaliation 
const enemyMoveSelect = (min, max) => {
    let enemyChoice = Math.floor(Math.random() * (max - min) + min);
    if (enemyChoice === 0) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= enemyAttack(6, 7))
    } else if (enemyChoice === 1) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= enemyAttack(7, 8))    
    } else if (enemyChoice === 2) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= enemyAttack(8, 9))
    } else if (enemyChoice === 3) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = currentPlayerHealth -= enemyAttack(9, 10))
    } else {
        console.log("error")
    }
    return enemyChoice
}

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

const hpUpPlayer = () => {
    if (currentPlayerHealth > 80) {
        playerHpDisplay.src="assets/HP Bar Split/5 Bar HP.png"
    } else if (currentPlayerHealth > 60 && currentPlayerHealth < 80) {
        playerHpDisplay.src="assets/HP Bar Split/4 Bar HP.png"
    } else if (currentPlayerHealth > 40 && currentPlayerHealth < 60) {
        playerHpDisplay.src="assets/HP Bar Split/3 Bar HP.png"
    } else if (currentPlayerHealth > 20 && currentPlayerHealth < 40) {
        playerHpDisplay.src="assets/HP Bar Split/2 Bar HP.png"
    } else if (currentPlayerHealth > 0 && currentPlayerHealth < 20) {
        playerHpDisplay.src="assets/HP Bar Split/1 Bar HP.png"
    }
}

const hpUpEnemy = () => {
    if (currentEnemyHealth > 80) {
        enemyHpDisplay.src="assets/HP Bar Split/5 Bar HP.png"
    } else if (currentEnemyHealth > 60 && currentEnemyHealth < 80) {
        enemyHpDisplay.src="assets/HP Bar Split/4 Bar HP.png"
    } else if (currentEnemyHealth > 40 && currentEnemyHealth < 60) {
        enemyHpDisplay.src="assets/HP Bar Split/3 Bar HP.png"
    } else if (currentEnemyHealth > 20 && currentEnemyHealth < 40) {
        enemyHpDisplay.src="assets/HP Bar Split/2 Bar HP.png"
    } else if (currentEnemyHealth > 0 && currentEnemyHealth < 20) {
        enemyHpDisplay.src="assets/HP Bar Split/1 Bar HP.png"
    }
}

const potionCap = () => {
    if (currentPlayerHealth >= 100) {
        playerHealth.innerHTML = "HP: " + (currentPlayerHealth = 100)
    }
}

const enemyPotionCap = () => {
    if (currentEnemyHealth >= 100) {
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = 100)
        document.getElementsByTagName("h5")[0].innerHTML = "Your Pokemon is full health. Watch out! The enemy might have healed too!"
    }
}

const noUsePotion = () => {
    if (currentPlayerHealth >= 100) {
        document.getElementsByTagName("h5")[0].innerHTML = "Your Pokemon is full health. Watch out! The enemy might have healed too!"
    }
}


const enemyPotion = (min, max) => {
    let potionChance = Math.floor(Math.random() * (max - min) + min);
    if (potionChance === 1) {
        enemyHealth.innerHTML = "HP: " + (currentEnemyHealth = currentEnemyHealth += 15)
    } else {
        console.log("Potion was not used")
    }
}

const playerLoss = () => {
    if (currentPlayerHealth <= 0) {
        document.getElementsByTagName("h5")[0].innerHTML = "Your pokemon fainted! Refresh the page to try again."
    }
}

const playerWin = () => {
    if (currentEnemyHealth <= 0) {
        document.getElementsByTagName("h5")[0].innerHTML = "You won! You earned 5000 P. Refresh the page to find another pokemon."
    }
}

const playerDraw = () => {
    if (currentPlayerHealth <= 0 && currentEnemyHealth <= 0) {
        document.getElementsByTagName("h5")[0].innerHTML = "It's a draw! Both pokemon fainted. Refresh the page to try again."
    }
}

// if either the player or enemy faint, clear the menus
const menuVanishPlayer = () => {
    if (currentEnemyHealth <= 0) {
        menu1.style.opacity = 0;
    }
}

const menuVanishEnemy = () => {
    if (currentPlayerHealth <= 0) {
        menu1.style.opacity = 0;
    }
}

const attackNote = () => {
    return document.getElementsByTagName("h5")[0].innerHTML = "The player and enemy have both attacked!"
}

let pokemonNames = ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE", "CATERPIE", "METAPOD","BUTTERFREE", "WEEDLE", "KAKUNA", "BEEDRILL", "PIDGEY", "PIDGEOTTO", "PIDGEOT", "RATTATA", "RATICATE", "SPEAROW", "FEAROW", "EKANS", "ARBOK", "PIKACHU", "RAICHU", "SANDSHREW", "SANDSLASH", "NIDORAN", "NIDORINA", "NIDOQUEEN", "NIDORAN", "NIDORINO", "NIDOKING", "CLEFAIRY", "CLEFABLE", "VULPIX", "NINETALES", "JIGGLYPUFF", "WIGGLYTUFF", "ZUBAT", "GOLBAT", "ODDISH", "GLOOM", "VILEPLUME", "PARAS", "PARASECT", "VENONAT", "VENOMOTH", "DIGLETT", "DUGTRIO", "MEOWTH", "PERSIAN", "PSYDUCK", "GOLDUCK", "MANKEY", "PRIMEAPE", "GROWLITHE", "ARCANINE", "POLIWAG", "POLIWHIRL", "POLIWRATH", "ABRA", "KADABRA", "ALAKAZAM", "MACHOP", "MACHOKE", "MACHAMP", "BELLSPROUT", "WEEPINBELL", "VICTREEBELL", "TENTACOOL", "TENTACRUEL", "GEODUDE", "GRAVELER", "GOLEM", "PONYTA", "RAPIDASH", "SLOWPOKE", "SLOWBRO", "MAGNEMITE", "MAGNETON", "FARFETCH'D", "DODUO", "DODRIO", "SEEL", "DEWGONG", "GRIMER", "MUK", "SHELLDER", "CLOYSTER", "GASTLY", "HAUNTER", "GENGAR", "ONIX", "DROWZEE", "HYPNO", "KRABBY", "KINGLER", "VOLTORB", "ELECTRODE", "EXEGGCUTE", "EXEGGUTOR", "CUBONE", "MAROWAK", "HITMONLEE", "HITMONCHAN", "LICKITUNG", "KOFFING", "WEEZING", "RHYHORN", "RHYDON", "CHANSEY", "TANGELA", "KANGASKHAN", "HORSEA", "SEADRA", "GOLDEEN", "SEAKING", "STARYU", "STARMIE", "MR.MIME", "SCYTHER", "JYNX", "ELECTABUZZ", "MAGMAR", "PINSIR", "TAUROS", "MAGIKARP", "GYARADOS", "LAPRAS", "DITTO", "EEVEE", "VAPOREON", "JOLTEON", "FLAREON", "PORYGON", "OMANYTE", "OMASTAR", "KABUTO", "KABUTOPS", "AERODACTYL", "SNORLAX", "ARTICUNO", "ZAPDOS", "MOLTRES", "DRATINI", "DRAGONAIR", "DRAGONITE", "MEWTWO", "MEW"]

const pokemonEncounter = (min, max) => {
    let pokemonChoice = Math.floor(Math.random() * (max - min) + min);
    let pokemonSrc = `./assets/Sprites/${pokemonChoice}.png`
    document.getElementById("zard").src = pokemonSrc
    console.log(pokemonNames[pokemonChoice - 1])
    document.querySelector("#poke").innerText = pokemonNames[pokemonChoice - 1]
}

console.log("hi")
