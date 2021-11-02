import { MovingObject } from './moving_object.js'

class Plant extends MovingObject {
  constructor(x, y, src) {
    super(x, y, src)
    this.ul = [x, y]
    this.ur = [(x+32), y]

    // if (this.src.includes('short')) {
    //   this.ll = [x, (y - 32)]
    //   this.lr = [(x + 32), (y-32)]
      // this.ml = null
      // this.mr = null
    // } else {
      // this.ml = [x, (y - 32)]
      // this.mr = [(x + 32), (y - 32)]
      this.ll = [x, (y - 64)]
      this.lr = [(x + 32), (y - 64)]
    // }
  }
}

export { Plant };