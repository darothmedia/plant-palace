// import { Furniture } from './scripts/furniture.js'
// import { Plant } from './scripts/plant.js'
// import { Human } from './scripts/human.js'
// import { Wall } from './scripts/wall.js'

import {setupGame, addPlants, level1} from './scripts/game_setup.js'

document.addEventListener("DOMContentLoaded", function() {
  setupGame()
  addPlants()

  
})

let modifier = 32

// const Canvas = document.getElementById("game-canvas");
// const ctx = Canvas.getContext("2d");

// window.addEventListener('keydown', keyPressed)
// window.addEventListener('keyup', keyUP)

