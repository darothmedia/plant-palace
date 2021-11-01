function setupGame() {
  const Canvas = document.getElementById("game-canvas");
  const ctx = Canvas.getContext("2d");
  const container = document.getElementById("game-container")

  var logo = document.createElement("img")
  logo.src = './img/assets/pp-game-logo.png'
  logo.width = 600
  logo.className = 'logo'
  container.appendChild(logo)

  var lvl1 = document.createElement("img")
  lvl1.src = './img/assets/bg/level-1.png'
  lvl1.width = 800
  lvl1.height = 600
  container.appendChild(lvl1)
}

export { setupGame }