import { MovingObject } from './moving_object.js'

class Plant extends MovingObject {
  constructor(x, y, src) {
    super(x, y, src)
  }
}

export { Plant };