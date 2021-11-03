class StaticObject {
  constructor(x, y, src) {
    this.x = x;
    this.y = y;
    this.src = src
  }

  draw(x, y, ctx) {
    let drawing = new Image()
    drawing.src = this.src
    drawing.onload = function () {
      ctx.drawImage(drawing, x, y)
    }
  }
}

export { StaticObject }