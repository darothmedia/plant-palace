// import { container } from "webpack";

import { Plant } from "./plant";

class Display {
  constructor() {
  }
}


function setupGame() {
  const Canvas = document.getElementById("game-canvas");
  const ctx = Canvas.getContext("2d");
  let container = document.getElementById("game-container")
  
  var base = document.createElement("img")
  base.src = './img/assets/bg/level-1.png'
  base.width = 800
  base.height = 600
  base.className = 'base'
  container.appendChild(base)
}

function level1() {
  let floor = document.createElement("img")
  let container = document.getElementById("game-container")
  floor.src = './img/assets/bg/level-1-tilemap.png'
  container.appendChild(floor)
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
    console.log(xx)
    let plantindex = './img/assets/plants/sized/' + plants[getRandomInt(15)]
    plantloc.push([xx, yy])

    let plant = new Plant(xx, yy, plantindex);
    plant.draw(xx, yy);
  }
  console.log(plantloc)

}

export { setupGame, addPlants, level1 }