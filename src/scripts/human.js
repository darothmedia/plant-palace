import { MovingObject } from './moving_object.js'

export class Human extends MovingObject {
  constructor (x, y, src) {
    super(x, y, src)
    // this.width = 32
    // this.height = 64
  }
}