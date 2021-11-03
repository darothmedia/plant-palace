import {Display} from './game_setup'

function level1_setup() {
  let container = document.getElementById("game-container")
  let base = document.createElement("img")

  base.src = './img/assets/bg/level-1-clear.png'
  base.width = 800
  base.height = 600
  base.className = 'base'
  container.appendChild(base)
}



const level1Obstacles = [[-1, 64, 64, 64, 64, 64, -1, -1, -1, 64, 64, 64, -1, -1, -1, -1, 64, 64, 64, 64],
  [-1, -1, 32, 64, 64, -1, -1, -1, -1, 64, 64, 64, -1, -1, -1, -1, 64, 64, 64, 64],
  [-1, -1, 32, 64, 64, -1, -1, -1, -1, 64, 64, 64, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, 64, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, 64, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [64, 64, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [64, 64, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]];

const level1MBC = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, 64, 64, 64, 64, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, -1, -1, -1, -1, -1, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, 64, -1, -1, -1, -1, -1, 64, -1],
[-1, -1, -1, -1, -1, -1, 64, 64, -1, -1, 64, -1, -1, -1, -1, -1, -1, -1, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, 64, -1, -1, 64, -1, -1, -1, -1, -1, -1, -1, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, 64, 64, 64, 64, -1, -1, 64, 64, 64, 64, 64, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, 64, -1, -1, 64, 64, 64, -1, -1, 64, 64, 64, 64, 64, 64, -1],
[-1, -1, -1, -1, -1, 64, 64, 64, 64, -1, 64, -1, -1, -1, -1, -1, -1, -1, 64, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 64, 64, 64, 64, 64, 64, 64, 64, -1]]

const validPlants = [[98, -1, -1, -1, -1, -1, -1, 98, 98, -1, -1, -1, 98, 98, 98, 98, -1, -1, -1, -1],
[98, -1, -1, -1, -1, -1, 98, 98, 98, -1, -1, -1, 98, 98, 98, 98, -1, -1, -1, -1],
[98, 98, -1, -1, -1, 98, 98, 98, 98, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[98, 98, -1, -1, -1, 98, -1, -1, 98, -1, -1, -1, -1, 98, -1, -1, -1, 98, -1, 98],
[98, 98, 98, 98, 98, 98, -1, -1, 98, 98, -1, -1, -1, 98, -1, -1, -1, 98, -1, 98],
[98, 98, 98, 98, 98, 98, -1, -1, 98, 98, -1, 98, 98, 98, -1, -1, -1, 98, -1, 98],
[-1, -1, -1, -1, -1, -1, -1, -1, 98, 98, -1, 98, 98, 98, 98, 98, 98, 98, -1, 98],
[98, 98, 98, 98, 98, 98, 98, -1, -1, -1, -1, 98, 98, -1, -1, -1, -1, -1, -1, 98],
[98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, -1, 98, 98, 98, 98, 98, 98],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 98, 98, -1, 98, 98, 98, 98, 98, 98],
[-1, -1, 98, 98, -1, -1, 98, 98, -1, -1, -1, 98, 98, -1, -1, -1, -1, -1, -1, 98],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, 98, -1, 98, 98, 98, 98, 98, 98, 98, -1, 98],
[98, 98, 98, 98, 98, 98, 98, 98, 98, 98, -1, -1, -1, -1, -1, -1, -1, -1, -1, 98]]

export {level1_setup, level1Obstacles, level1MBC, validPlants}

