import { StaticObject } from './static_object.js'

class Wall extends StaticObject {
  constructor(x, y, src) {
    super(x, y, src)
  }
}

export { Wall };