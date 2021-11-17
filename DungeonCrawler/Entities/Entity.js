class Entity{
  constructor(attrs){
    this.sprite = attrs.sprite;
    this.hp = attrs.hp;
    this.attack = attrs.attack;
  }

  draw(canvas, x, y){
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.onload = function() {
      ctx.drawImage(img, Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 32, 32)
    }
    img.src = this.sprite;
  }
}

const entities = {
  Player: new Entity({sprite:"../Sprites/PlayerSprite.png", hp: 10, attack:10}),
  Enemey: new Entity({sprite:"../Sprites/DonutEnemySprite.png", hp: 10, attack:10})
}
