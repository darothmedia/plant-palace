// import { container } from "webpack";

import { Plant } from "./plant";
import { level1_setup } from "./level_1";
import { Human } from "./human";

export class Display {
  constructor() {
    this.loc = []
  }

  xpos(x) { return 32 + (32 * x) }
  ypos(y) { return 32 * y }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  level_setup(level) {
    if (level === 1) return level1_setup()
  }

  addPlants(ctx) {
  var plantloc = []
  const plants = [
    'leafy-plant-short.png',
    'bonsai-short.png',
    'bamboo-tall.png',
    'cherry-tree-tall.png',
    'man-eater-tall.png',
    // 'tree-tall.png',
    'tree-short.png',
    'vase-tall.png',
    'medium-cactus.png',
    'large-cactus.png',
    'small-cactus.png',
    'plant-red-medium.png',
    'plant-yellow-medium.png',
    'plant-orange-medium.png',
    // 'plant-green-tall.png',
    'snake-plant-tall.png'
  ]

  for (let i = 0; i < 50; i++) {
    let xx = this.xpos(this.getRandomInt(20))
    let yy = this.ypos(this.getRandomInt(12))
    while (this.loc.includes([xx, yy], [xx, yy + 32]) || this.loc.includes([xx, yy+32])) {
      xx = this.xpos(this.getRandomInt(20))
      yy = this.ypos(this.getRandomInt(12))
    }
    let plantindex = './img/assets/plants/sized/' + plants[this.getRandomInt(13)]

    let plant = new Plant(xx, yy, plantindex);
    plantloc.push(plant.ul, plant.ll, plant.lr, plant.ur)
    plant.draw(xx, yy, ctx);
  }
    plantloc.forEach((loc) => { this.loc.push(loc) })
}

  addHuman(ctx) {
    let humanloc = []
    let human = new Human(224, 128, './img/assets/human/basic-human.png')
    human.draw(224, 128, ctx)
    humanloc.push(human.ul, human.ll, human.lr, human.ur)
    humanloc.forEach((loc) => {this.loc.push(loc)})
    this.human = human
  }

}