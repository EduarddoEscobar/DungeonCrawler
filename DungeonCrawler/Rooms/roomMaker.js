class Room{
  constructor(roomAttrs){
    this.roomId = roomAttrs.roomId;
    this.moveOptions = roomAttrs.moveOptions;
    this.hasTreasure = roomAttrs.hasTreasure;
    this.enemies = roomAttrs.enemies;
    console.log(`New Room with id: ${this.roomId}:`);
  }

  draw(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    this.enemies.forEach(enemy => {
      enemy.draw(canvas, Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    });
  }
}
