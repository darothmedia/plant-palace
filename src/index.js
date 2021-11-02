// import { Furniture } from './scripts/furniture.js'
// import { Plant } from './scripts/plant.js'
// import { Human } from './scripts/human.js'
// import { Wall } from './scripts/wall.js'

import { Display } from './scripts/game_setup.js'
import { level1_setup } from './scripts/level_1.js'



document.addEventListener("DOMContentLoaded", function() {
  let display = new Display()
  display.level_setup(1)
  // display.addHuman()
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const pcanvas = document.getElementById("player-canvas");
  const pctx = pcanvas.getContext("2d");
  display.addPlants(ctx)
  display.addHuman(pctx)

  var human = display.human
  var keys = []
  window.addEventListener('keydown', function(e){
    keys[e.key] = true
    console.log(keys)
  });
  window.addEventListener('keyup', function (e){
    delete keys[e.key];
  });

  function draw(x, y, ctx) {
    let drawing = new Image()
    drawing.src = human.src
    ctx.drawImage(drawing, x, y)
  }

  window.setInterval(function () { 
    movePlayer(); 
    pctx.clearRect(0, 0, pcanvas.width, pcanvas.height)
    draw(human.x, human.y, pctx)}, 1)

  function animate() {
    movePlayer()
    // requestAnimationFrame(animate)
  }

  animate();

  function validMove() {
    if (keys['ArrowUp'] && human.y < 32) {return false}
    if (keys['ArrowDown'] && human.y > 384) {return false}
    if (keys['ArrowLeft'] && human.x < 32) {return false}
    if (keys['ArrowRight'] && human.x > 640) {return false}
  }

  function movePlayer() {
    if (keys['ArrowUp'] && (human.y > 0)) {
      human.y -= 1;
      console.log('moved up')
    }
    else if (keys['ArrowDown'] && human.y < 384) {
      human.y += 1;
      console.log('moved down')
    }
    else if (keys['ArrowLeft'] && human.x > 32) {
      human.x -= 1;
      console.log('moved left')
    }
    else if (keys['ArrowRight'] && human.x < 640) {
      human.x += 1;
      console.log('moved right')
    } else {
      
    }
  }
  
})

// function doKeyDown(e) {
//   if (e.keyCode === 87 || e.keyCode === 38) {
//     human.move([0, -32])
//   }
//   if (e.keyCode === 83 || e.keyCode === 40) {
//     human.move([0, 32])
//   }
//   if (e.keyCode === 65 || e.keyCode === 37) {
//     human.move([-32, 0])
//   }
//   if (e.keyCode === 68 || e.keyCode === 39) {
//     human.move([32, 0])
//   }