class Display {
  constructor() {

  }
  setupGame() {
    const Canvas = document.getElementById("game-canvas");
    const ctx = Canvas.getContext("2d");
    const container = document.getElementById("game-container")

    var logo = document.createElement("img")
    logo.src = './img/assets/pp-game-logo.png'
    logo.width = 600
    logo.className = 'logo'
    container.appendChild(logo)

    var base = document.createElement("img")
    base.src = './img/assets/bg/base-floor.png'
    base.width = 800
    base.height = 600
    base.id = 'base'
    container.appendChild(base)
  }

  addPlants() {
    
  }
}


function setupGame() {
  const Canvas = document.getElementById("game-canvas");
  const ctx = Canvas.getContext("2d");
  const container = document.getElementById("game-container")
  
  var base = document.createElement("img")
  base.src = './img/assets/bg/base-floor.png'
  base.width = 800
  base.height = 600
  base.className = 'base'
  container.appendChild(base)

  var logo = document.createElement("img")
  logo.src = './img/assets/pp-game-logo.png'
  logo.width = 600
  logo.className = 'logo'
  container.appendChild(logo)
  // let logo = new Image()
  // logo.onload = function () {
  //   ctx.drawImage(logo, 0, 0)
  // }
  // logo.src = './img/assets/pp-game-logo-small.png'
  // logo.width = 50
}

function xpos(x) { return 32 + (32 * x) }
function ypos(y) { return 32 * y }
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var plantloc = []


function addPlants() {
  const plants = [
    'leafy-plant-short.png',
    'bonsai-short.png',
    'bamboo-tall.png',
    // 'snake-plant-tall.png',
    'cherry-tree-tall.png',
    'man-eater-tall.png',
    'tree-tall.png',
    'tree-short.png',
    'vase-tall.png',
    'medium-cactus.png',
    'large-cactus.png',
    'small-cactus.png',
    'plant-red-medium.png',
    'plant-yellow-medium.png',
    'plant-orange-medium.png',
    'plant-green-tall.png'
  ]
  
  const Canvas = document.getElementById("game-canvas");
  const ctx = Canvas.getContext("2d");

  for (let i = 0; i < 30; i++) {
    let xx = xpos(getRandomInt(20))
    let yy = ypos(getRandomInt(12))
    while (plantloc.includes([xx, yy])) {
      xx = xpos(getRandomInt(20))
      yy = ypos(getRandomInt(12))
    }

    let plantindex = plants[getRandomInt(15)]
    plantloc.push([xx, yy])

    let plant = new Image()
    plant.onload = function () {
      ctx.drawImage(plant, xx, yy)
    }
    plant.src = './img/assets/plants/sized/' + plantindex
  }
  
  // let plant = new Image()
  // plant.onload = function() {
  //   ctx.drawImage(plant, 10, 30)
  // }
  // plant.src = './img/assets/plants/sized/man-eater-tall.png'

}


// for (let i = 0; i < 15; i++) {
//   let xx = xpos(getRandomInt(20))
//   let yy = ypos(getRandomInt(13))
//   while (plantloc.includes([xx, yy])) {
//     xx = xpos(getRandomInt(20))
//     yy = ypos(getRandomInt(13))
//   }
//   let plantindex = plants[getRandomInt(3)]

//   plantloc.push([plant.x, plant.y])
// }

export { setupGame, addPlants }