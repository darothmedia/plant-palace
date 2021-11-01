import { MovingObject } from './moving_object.js'

class Plant extends MovingObject {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, 'Player')
    this.scale = 0.2
  }
}

export { Plant };