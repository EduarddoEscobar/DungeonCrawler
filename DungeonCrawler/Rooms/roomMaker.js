class Room{
  constructor(roomAttrs){
    this.roomId = roomAttrs.roomId;//Number
    this.moveOptions = roomAttrs.moveOptions;//Array of boolean values
    this.enemies = roomAttrs.enemies;//Array of enemy objects
    this.roomColor = roomAttrs.roomColor;// String of color
    ///Boolean values indicating room status\\\
    this.roomCleared = roomAttrs.roomCleared;
    this.hasTreasure = roomAttrs.hasTreasure;
    console.log(`New Room with id: ${this.roomId}:`);
  }

  draw(){
    let canvas = document.getElementById('myCanvas');
    canvas.style.backgroundColor = this.roomColor;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.enemies.forEach(enemy => {
      enemy.draw(canvas, Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    });
  }
}
