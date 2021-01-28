window.addEventListener('DOMContentLoaded', (e) => {
    console.log("Javascript Loaded Correctly!");
    enemyHealth.innerHTML = ("HP: " + currentHealth)
    fightButton.addEventListener("click", (e) => {
        console.log("Fight Button Pushed!")
        menu1.style.opacity = 0;
        menu2.style.opacity = 1;
    })
    pkmnButton.addEventListener("click", (e) => {
        console.log("PKMN Button Pushed!")
    })
    itemButton.addEventListener("click", (e) => {
        console.log("Item Button Pushed!")
        document.getElementsByTagName("h5")[0].innerHTML = "You used a potion! HP increased by 10."

    })
    runButton.addEventListener("click", (e) => {
        console.log("Run Button Pushed!")
        document.getElementsByTagName("h5")[0].innerHTML = "Why are you trying to run? We're trying to do a presentation."
    })
    firstMove.addEventListener("click", (e) => {
        console.log("First Move Pushed!")
        console.log(damageValue(10, 15))
        enemyHealth.innerHTML = "HP: " + (currentHealth - damageValue(10, 15))
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    secondMove.addEventListener("click", (e) => {
        console.log("Second Move Pushed!")
        console.log(damageValue(15, 25))
        enemyHealth.innerHTML = "HP: " + (currentHealth = currentHealth -= damageValue(15, 25))
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    thirdMove.addEventListener("click", (e) => {
        console.log("Third Move Pushed!")
        console.log(damageValue(25, 35))
        enemyHealth.innerHTML = "HP: " + (currentHealth -= damageValue(25, 35))
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
    fourthMove.addEventListener("click", (e) => {
        console.log("Fourth Move Pushed!")
        console.log(damageValue(40, 60))
        enemyHealth.innerHTML = "HP: " + (currentHealth -= damageValue(40, 60))
        menu1.style.opacity = 1;
        menu2.style.opacity = 0;
    })
})

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
let currentHealth = 100;

// menu 2 options
let menu2 = document.querySelector(".moves")

// sets the min max value of damage
const damageValue = (min, max) => {
    // use a for loop here if (return < 1) else this to trigger the event
    // define returnNum ahead of time
    return 
}

const returnNum = Math.floor(Math.random() * (max - min) + min);

    // create a function to check if HP drops below 0 to reprint 0 back as a HP: 0