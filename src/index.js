// import { Furniture } from './scripts/furniture.js'
// import { Plant } from './scripts/plant.js'
// import { Human } from './scripts/human.js'
// import { Wall } from './scripts/wall.js'

import {setupGame, addPlants} from './scripts/game_setup.js'

document.addEventListener("DOMContentLoaded", function() {
  setupGame()
  addPlants()
})

