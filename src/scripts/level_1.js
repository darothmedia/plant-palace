import {Display} from './game_setup'

function level1_setup() {
  let container = document.getElementById("game-container")
  let base = document.createElement("img")

  base.src = './img/assets/bg/level-1.png'
  base.width = 800
  base.height = 600
  base.className = 'base'
  container.appendChild(base)
}

export {level1_setup}

