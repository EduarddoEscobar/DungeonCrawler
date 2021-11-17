class Room{
  constructor(roomAttrs){
    this.roomId = roomAttrs.roomId;
    this.moveOptions = roomAttrs.moveOptions;
    this.hasTreasure = roomAttrs.hasTreasure;
    this.enemySprites = roomAttrs.enemySprites;
    console.log(`New Room with id: ${this.roomId}:`);
  }

  draw(){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    this.enemySprites.forEach(sprite => {
      let img = new Image();
      img.onload = function() {
        ctx.drawImage(img, Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height))
      }
      img.src = sprite;
    });// draw enemy sprite at random position in the canvas
  }
}
