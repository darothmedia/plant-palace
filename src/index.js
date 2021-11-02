// import { Furniture } from './scripts/furniture.js'
// import { Plant } from './scripts/plant.js'
// import { Human } from './scripts/human.js'
// import { Wall } from './scripts/wall.js'

import { Display } from './scripts/game_setup.js'
import { level1_setup } from './scripts/level_1.js'



document.addEventListener("DOMContentLoaded", function() {
  let display = new Display()
  display.level_setup(1)
  
  const loc = display.loc
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const pcanvas = document.getElementById("player-canvas");
  const pctx = pcanvas.getContext("2d");
  
  display.addHuman(pctx)
  display.addPlants(ctx)
  

  var human = display.human
  var keys = []
  window.addEventListener('keydown', function(e){
    keys[e.key] = true
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
    if (keys['ArrowUp'] && human.y > 0 ) {return false}
    if (keys['ArrowDown'] && human.y > 384) {return false}
    if (keys['ArrowLeft'] && human.x < 32) {return false}
    if (keys['ArrowRight'] && human.x > 640) {return false}
  }

  function movePlayer() {
    if (keys['ArrowUp'] && (human.x < 220 && human.y === 190)) { }
    // else if (keys['ArrowUp'] && ((human.x > 250 || human.x < 217) && human.y === 190)) { }
    else if (keys['ArrowUp'] && (human.y > 0)) {
      human.y -= 1;
    }
    else if (keys['ArrowDown'] && (human.x < 220 && human.y === 154)) {} 
    else if (keys['ArrowDown'] && ((human.x < 280 && human.x > 250) && human.y === 154)) {}
    else if (keys['ArrowDown'] && (human.x < 405 && human.y === 250)) {}
    else if (keys['ArrowDown'] && human.y < 384) {
      human.y += 1;
    }
    else if (keys['ArrowLeft'] && (human.y < 153 && human.x === 320)) { }
    else if (keys['ArrowLeft'] && (human.y > 300 && human.x < 150)) {
      console.log('winner!')
      ctx.beginPath();
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(32, 32, canvas.width - 64, canvas.height - 97)
      ctx.font = "50px Arial";
      ctx.fillStyle = 'white'
      ctx.fillText("Nicely Done", 225, 250)
    }

    else if (keys['ArrowRight'] && (human.x === 280 && human.y < 200)) {
    }

    else if (keys['ArrowRight'] && human.x < 640) {
      human.x += 1;
      // console.log('moved right')
    } else if (keys['ArrowLeft'] && (human.x > 32)) {
      human.x -= 1;
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