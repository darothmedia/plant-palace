import { Display } from './scripts/game_setup.js'

document.addEventListener("DOMContentLoaded", function() {
  let display = new Display()
  display.level_setup(1)
  
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const pcanvas = document.getElementById("player-canvas");
  const pctx = pcanvas.getContext("2d");
  const fcanvas = document.getElementById("furniture-canvas");
  const fctx = fcanvas.getContext("2d");

  gameStart()
  pcanvas.addEventListener('click', load)



  function load() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fctx.clearRect(0, 0, fcanvas.width, fcanvas.height)
    display.addPlants(ctx)
    drawFurniture(0, 0)
    animate();
    peetimeout()
    mission()
    timeint()
    pcanvas.removeEventListener('click', load)
  }


  display.addHuman(fctx)
  var peetimer;

  function peetimeout(){
    peetimer = window.setTimeout(function () {
      ctx.clearRect(0, 0, pcanvas.width, pcanvas.height)
      fctx.clearRect(0, 0, fcanvas.width, fcanvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(32, 32, canvas.width - 64, canvas.height - 97)
      ctx.font = "50px Arial";
      ctx.fillStyle = 'white'
      ctx.fillText("OH NO", 225, 250)
      pee();
      replay()
    }, 11000)
  } 

  function stoppee(){
    clearTimeout(peetimer)
  }

  function pee(){
    window.setTimeout(function () {
      ctx.fillStyle = '#F1F106'
      ctx.beginPath()
      ctx.arc(human.x + 16, human.y + 50, 50, 0, 2 * Math.PI);
      ctx.fill();
    }, 500)
  }

  function mission(){
    drawBubble(ctx, 275, 425, 375, 50, 10)
    ctx.font = "20px Arial";
    ctx.fillStyle = 'black'
    ctx.fillText("I need to pee!!!", 300, 445)
    ctx.fillText("Get me to the bathroom!", 300, 470)
  }

  var count = 10;
  var counter;
  function timeint() { counter = setInterval(timer, 1000)}

  function timer() {
    ctx.clearRect(550, 425, 75, 75)
    ctx.fillStyle = 'white'
    ctx.fillRect(550, 425, 75, 50)
    ctx.font = "50px Arial"
    ctx.fillStyle = 'red'
    ctx.fillText(`${count}`, 550, 470)
    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      return;
    }
  }

  function drawBubble(ctx, x, y, w, h, radius) {
    var r = x + w;
    var b = y + h;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.lineWidth = "2";
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + radius / 2, y - 10);
    ctx.lineTo(x + radius * 2, y);
    ctx.lineTo(r - radius, y);
    ctx.quadraticCurveTo(r, y, r, y + radius);
    ctx.lineTo(r, y + h - radius);
    ctx.quadraticCurveTo(r, b, r - radius, b);
    ctx.lineTo(x + radius, b);
    ctx.quadraticCurveTo(x, b, x, b - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.fill();
  }

  var human = display.human
  var keys = []
  window.addEventListener('keydown', function(e){
    e.preventDefault()
    keys[e.key] = true
  });
  window.addEventListener('keyup', function (e){
    delete keys[e.key];
  });

  function drawHuman(x, y, ctx) {
    let drawing = new Image()
    drawing.src = human.src
    ctx.drawImage(drawing, x, y)
  }

  function gameStart() {
    ctx.fillStyle = "black"
    ctx.fillRect(32, 32, canvas.width - 64, canvas.height - 97)
    ctx.font = "22px Arial";
    ctx.fillStyle = 'white'
    ctx.fillText("In 2020, in the midst of a global pandemic,", 100, 100)
    ctx.fillText("you decided to replace the void of physical" , 100, 120)
    ctx.fillText("human interaction with plants.A LOT of plants.", 100, 140)
    ctx.fillText("Now, deep into 2021, your apartment has become" , 100, 180)
    ctx.fillText("cluttered with plant pots, plant shelves,", 100, 200)
    ctx.fillText("hanging gardens, kitchen grow lights, and more....", 100, 220)

    ctx.fillStyle = "green"
    ctx.fillRect(275, 290, 125, 60)
    ctx.fillStyle = "white"
    ctx.fillText("START", 300, 325)

  }

  function drawFurniture(x, y) {
    let furn = new Image()
    furn.src = './img/assets/bg/level-1-furniture.png'
    furn.onload = function () {
      fctx.drawImage(furn, x, y)
    }
  }


  function animate() {
    window.setInterval(function () {
      movePlayer();
      pctx.clearRect(0, 0, pcanvas.width, pcanvas.height)
      drawHuman(human.x, human.y, pctx)
    }, 1)
  }

  var resetSec = 2

  function resetTimeint() { resetCounter = setInterval(resetTimer, 1000) }

  function resetTimer() {
    ctx.clearRect(300, 300, 75, 50)
    ctx.fillStyle = 'black'
    ctx.fillRect(300, 300, 75, 50)
    ctx.font = "50px Arial"
    ctx.fillStyle = 'white'
    ctx.fillText(`${resetSec}`, 300, 340)
    resetSec = resetSec - 1;
    if (resetSec <= 0) {
      clearInterval(resetCounter);
      return;
    }
  }

  function replay() {
    let pa = window.setTimeout(function () {
      ctx.clearRect(0, 0, pcanvas.width, pcanvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(32, 32, canvas.width - 64, canvas.height - 97)
      ctx.font = "50px Arial";
      // ctx.fillStyle = 'green'
      // ctx.fillRect(205, 200, 300, 75)
      ctx.fillStyle = 'white'
      ctx.fillText("Resetting...", 225, 250)
      // ctx.fillText("3", 300, 340)
      // resetTimeint()
    }, 2000)


    window.setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  


   // window.addEventListener('click', function (e) {
    //     clearTimeout(pa)
        
    // })
  // function reload(){
  //   location.reload();
  // }

  function movePlayer() {

    let valid = display.validloc
    
    /////// UP WALLS ///////////
    if (keys['ArrowUp'] && (human.x < 220 && human.y === 190)) { }
    else if (keys['ArrowUp'] && ((human.x > 262 && human.x < 320) && human.y === 190)) { }
    else if (keys['ArrowUp'] && (human.x < 405 && human.y === 280)) { }

    ////// UP GAME BORDER ///////
    else if (keys['ArrowUp'] && ((human.y > 0) && 
    ((valid[Math.floor(human.y / 32)][Math.floor(human.x / 32)] < 0) 
    ))) {
      human.y -= 1;
    }
     /////// DOWN WALLS ///////////
    else if (keys['ArrowDown'] && (human.x < 220 && human.y === 154)) {} 
    else if (keys['ArrowDown'] && ((human.x < 281 && human.x > 262) && human.y === 154)) {}
    else if (keys['ArrowDown'] && (human.x < 405 && human.y === 250)) {}

    ////// DOWN GAME BORDER ///////
    else if (keys['ArrowDown'] && ((human.y < 384) && 
    ((valid[Math.floor(human.y / 32) + 1][Math.floor(human.x / 32)] < 0) 
    ))) {
      human.y += 1;
    }

     /////// LEFT WALLS ///////////
    else if (keys['ArrowLeft'] && (human.y < 190 && human.x === 320)) { }
    else if (keys['ArrowLeft'] && ((human.y > 270 && human.y < 300) && human.x === 190)) { }

    /////// WIN STATE ///////////
    else if (keys['ArrowLeft'] && (human.y > 260 && human.x < 150)) {
      ctx.beginPath();
      fctx.clearRect(0, 0, fcanvas.width, fcanvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "black"
      ctx.fillRect(32, 32, canvas.width - 64, canvas.height - 97)
      ctx.font = "50px Arial";
      ctx.fillStyle = 'white'
      ctx.fillText("Nicely Done", 225, 250)
      stoppee()
      clearInterval(counter)
      replay()
    }

     /////// LEFT GAME BORDER ///////////
    else if (keys['ArrowLeft'] && ((human.x > 32) &&
    ((valid[Math.floor(human.y / 32)][Math.floor(human.x / 32) - 1] < 0)
    ))) {
      human.x -= 1;
    }

     /////// RIGHT WALLS ///////////
    else if (keys['ArrowRight'] && (human.x === 280 && human.y < 170)) {}

    /////// RIGHT GAME BORDER ///////////
    else if (keys['ArrowRight'] && (human.x < 639 && 
      ((valid[Math.floor(human.y / 32)][Math.floor(human.x / 32)] < 0)
      ))) {
      human.x += 1;
    } 
  }
  
})
