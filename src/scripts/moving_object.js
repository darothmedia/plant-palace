export class MovingObject {
  constructor(x, y, src) {
    this.x = x
    this.y = y
    this.src = src
    this.ul = [x, y]
    this.ur = [(x + 32), y]
    this.ll = [x, (y - 64)]
    this.lr = [(x + 32), (y - 64)]
    // this.width = 32
    // this.height = 64
  }

  draw(x, y, ctx) {
    let drawing = new Image()
    drawing.src = this.src
    drawing.onload = function () {
      ctx.drawImage(drawing, x, y)
    }
  }

  move() {
    this.x += 32
    this.y += 32
    
  }
  
}

