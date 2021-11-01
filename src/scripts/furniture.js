import { StaticObject } from './static_object.js'

class Furniture extends StaticObject {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, 'Player')
    this.scale = 0.2
  }
}

export { Furniture };