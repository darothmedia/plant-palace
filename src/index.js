// import { Furniture } from './scripts/furniture.js'
// import { Plant } from './scripts/plant.js'
// import { Human } from './scripts/human.js'
// import { Wall } from './scripts/wall.js'

import { Display } from './scripts/game_setup.js'
import { level1_setup } from './scripts/level_1.js'

document.addEventListener("DOMContentLoaded", function() {
  let display = new Display()
  display.level_setup(1)
  display.addPlants()

  var canvas = document.querySelector('game-canvas')
  
  // canvas.addEventListener('click', function (event) {
  //   var x = event.pageX - canvasLeft
  //   var y = event.pageY = canvasTop

  //   console.log([x, y])
  // })

})
// window.onload = function() {
      // context = canvas.getContext('2d'),
      // elements = []
      // canvasLeft = canvas.offsetLeft + canvas.clientLeft,
      // canvasTop = canvas.offsetTop + canvas.clientTop


  

  // canvas.addEventListener('keydown', doKeyDown, true)

  let activeObject;

  function doKeyDown(e) {
    if (e.keyCode === 87 || e.keyCode === 38) {
      activeObject.move(0, -32)
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
      activeObject.move(0, 32)
    }
    if (e.keyCode === 65 || e.keyCode === 37) {
      activeObject.move(-32, 0)
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
      activeObject.move(32, 0)
    }
  }
// }


let modifier = 32

