class MovingObject {
  constructor(x, y, src) {
    this.x = x
    this.y = y
    this.src = src
  }

  draw(x, y) {
    const Canvas = document.getElementById("game-canvas");
    const ctx = Canvas.getContext("2d");
    let drawing = new Image()
    drawing.onload = function () {
      ctx.drawImage(drawing, x, y)
    }
    drawing.src = this.src
  }

  move(pos) {
    this.x += pos[0]
    this.y += pos[1]
  }
}

export {MovingObject}