// import { container } from "webpack";

import { Plant } from "./plant";
import { level1_setup } from "./level_1";

export class Display {
  constructor() {
  }

  xpos(x) { return 32 + (32 * x) }
  ypos(y) { return 32 * y }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  level_setup(level) {
    if (level === 1) return level1_setup()
  }

  addPlants() {
  var plantloc = []
  const plants = [
    'leafy-plant-short.png',
    'bonsai-short.png',
    'bamboo-tall.png',
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
    // 'snake-plant-tall.png',
  ]

  for (let i = 0; i < 30; i++) {
    let xx = this.xpos(this.getRandomInt(20))
    let yy = this.ypos(this.getRandomInt(12))
    while (plantloc.includes([xx, yy])) {
      xx = this.xpos(this.getRandomInt(20))
      yy = this.ypos(this.getRandomInt(12))
    }
    let plantindex = './img/assets/plants/sized/' + plants[this.getRandomInt(15)]
    plantloc.push([xx, yy])

    let plant = new Plant(xx, yy, plantindex);
    plant.draw(xx, yy);
  }
}
}