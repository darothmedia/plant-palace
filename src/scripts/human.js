import { MovingObject } from './moving_object.js'

class Human extends MovingObject {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, 'Player')
  }
}

export { Human };