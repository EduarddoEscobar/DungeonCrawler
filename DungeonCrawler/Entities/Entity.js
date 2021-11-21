class Entity{
  constructor(attrs){
    this.sprite = attrs.sprite;//String that leads to the sprite
    this.name = attrs.name;

    ///Ints for spawning position\\\
    this.x = attrs.x;
    this.y = attrs.y;
    this.width = attrs.width;
    this.height = attrs.height

  }

  draw(canvas){
    let ctx = canvas.getContext('2d');//Takes the canvas document elemnt then gets the context from

    ///Makes a new image to draw onto the canvas then assigns the sprite to the new image being drawn\\\
    let img = new Image();
    img.onload = function() {
      ctx.drawImage(img, this.x, this.y, 32, 32);
    }
    img.src = this.sprite;
  }

  delete(canvas){
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.onload = function() {
      ctx.clearRect(this.x, this.y, this.width, this.height);
    }
  }
}

class KillableEnemy extends Entity{
  constructor(attrs){
    ///Ints for character stats\\\
    this.hp = attrs.hp
    this.attack = attrs.attack;
    this.isDead = false;
  }


}

class Button extends Entity{
  constructor(attrs){
    super(attrs);
    this.color = attrs.color;
    this.textColor = attrs.textColor;
    this.text = attrs.text;
    this.buttonFunction = attrs.buttonFunction;
  }

  draw(canvas){
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.textColor;
  }

  clickButton(event){
    let x = event.clientX;
    let y = event.clientY;
    if(x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height){
      this.buttonFunction();
    }
  }
}

class Enemy extends KillableEnemy{
  constructor(attrs){
    super(attrs);
    this.xp = attrs.xp;
  }

  givePlayerXP(player){
    player.xp += this.xp;
  }

  takeDamage(amount){
    this.hp -= amount;
  }

  heal(amount){
    this.hp += amount;
  }

  dealDamage(amount, entity){
    entity.takeDamage(amount);
  }
}

class Player extends KillableEnemy{
  constructor(attrs){
    super(attrs);
    this.level = attrs.level;
    this.skillPoints = attrs.level * 2;
  }

  increaseHP(){
    this.hp++;
    this.skillPoints--;
  }

  increaseAttack(){
    this.attack++;
    this.skillPoints--;
  }

  levelUp(){
    this.level++;
    this.skillPoints += 2;
  }

  move(xChange, yChange){
    this.x += xChange;
    this.y += yChange;
  }
}

const entities = {
  Player: new Entity({sprite:"../Sprites/PlayerSprite.png", hp: 10, attack:10}),
  Enemey: new Entity({sprite:"../Sprites/DonutEnemySprite.png", hp: 10, attack:10})
}

const buttons = {
  Create: new Button({sprite: null, x: 300, y: 300, width: 100, height: 50, text:"Make room", textColor:"black", color:"white"}),
  Delete: new Button({sprite: null, x: 300, y: 400, width: 100, height: 50, text:"Delete room", textColor:"black", color:"white"})
}
