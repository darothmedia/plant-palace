// import { container } from "webpack";

import { Plant } from "./plant";
import { level1_setup, validity } from "./level_1";
import { Human } from "./human";

export class Display {
  constructor() {
    this.validloc = Array.from(validity)
    this.human = null
  }

  xpos(x) { return 32 * x }
  ypos(y) { return 32 * y }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  level_setup(level) {
    if (level === 1) return level1_setup()
  }

  addPlants(ctx) {
    const plants = [
      'leafy-plant-short.png',
      'bonsai-short.png',
      'bamboo-tall.png',
      'cherry-tree-tall.png',
      'man-eater-tall.png',
      'tree-short.png',
      'vase-tall.png',
      'medium-cactus.png',
      'large-cactus.png',
      'small-cactus.png',
      'plant-red-medium.png',
      'plant-yellow-medium.png',
      'plant-orange-medium.png',
      'snake-plant-tall.png'
    ]

    for (let i = 0; i < 55; i++) {
      let randx = this.getRandomInt(20)
      let randy = this.getRandomInt(12)
      let xx = this.xpos(randx)
      let yy = this.ypos(randy)
      while ((this.validloc[randy][randx] !== -2)) {
        randx = this.getRandomInt(20)
        randy = this.getRandomInt(12)
        xx = this.xpos(randx)
        yy = this.ypos(randy)
      }
      let plantindex = './img/assets/plants/sized/' + plants[this.getRandomInt(13)]
    
      let plant = new Plant(xx, yy, plantindex);
      plant.draw(xx + 32, yy + 32, ctx);
      this.validloc[randy][randx] = 0
    }
  }

  addHuman(ctx) {
    let human = new Human(224, 128, './img/assets/human/b-human.png')
    human.draw(224, 128, ctx)
    this.human = human
  }
}