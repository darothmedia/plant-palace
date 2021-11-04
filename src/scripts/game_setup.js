// import { container } from "webpack";

import { Plant } from "./plant";
import { level1Obstacles, level1_setup, level1MBC, validPlants, validity } from "./level_1";
import { Human } from "./human";

export class Display {
  constructor() {
    this.loc = []
    this.plantsloc = []
    this.validloc = Array.from(validity)
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

  for (let i = 0; i < 55; i++) {
    let randx = this.getRandomInt(20)
    let randy = this.getRandomInt(12)
    let xx = this.xpos(randx)
    let yy = this.ypos(randy)
    while (this.validloc[randy][randx] !==98) {
      randx = this.getRandomInt(20)
      randy = this.getRandomInt(12)
      xx = this.xpos(randx)
      yy = this.ypos(randy)
    }
    this.validloc[randy][randx] = -1
    let plantindex = './img/assets/plants/sized/' + plants[this.getRandomInt(13)]
  
    let plant = new Plant(xx, yy, plantindex);
    plantloc.push(plant.ul, plant.ll, plant.lr, plant.ur)
    
    plant.draw(xx, yy, ctx);
  }
  // console.log(this.validloc)
    plantloc.forEach((loc) => { this.loc.push(loc) })
    // console.log(this.plantsloc)
}

  addHuman(ctx) {
    let humanloc = []
    let human = new Human(224, 128, './img/assets/human/b-human.png')
    human.draw(224, 128, ctx)
    humanloc.push(human.ul, human.ll, human.lr, human.ur)
    humanloc.forEach((loc) => {this.loc.push(loc)})
    this.human = human
  }

}