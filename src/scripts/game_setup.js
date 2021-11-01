class Display {
  constructor() {
    
  }
  setupGame() {
    const Canvas = document.getElementById("game-canvas");
    const ctx = Canvas.getContext("2d");
    const container = document.getElementById("game-container")

    var logo = document.createElement("img")
    logo.src = './img/assets/pp-game-logo.png'
    logo.width = 600
    logo.className = 'logo'
    container.appendChild(logo)

    var base = document.createElement("img")
    base.src = './img/assets/bg/base-floor.png'
    base.width = 800
    base.height = 600
    base.id = 'base'
    container.appendChild(base)
  }
}


function setupGame() {
  const Canvas = document.getElementById("game-canvas");
  const ctx = Canvas.getContext("2d");
  const container = document.getElementById("game-container")

  var logo = document.createElement("img")
  logo.src = './img/assets/pp-game-logo.png'
  logo.width = 600
  logo.className = 'logo'
  container.appendChild(logo)

  var base = document.createElement("img")
  base.src = './img/assets/bg/base-floor.png'
  base.width = 800
  base.height = 600
  base.id = 'base'
  container.appendChild(base)
}

export { setupGame }