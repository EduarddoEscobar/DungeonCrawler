class Entity{
  constructor(attrs){
    this.sprite = attrs.sprite;//String that leads to the sprite
    this.name = attrs.name;

    ///Ints for spawning position\\\
    this.x = attrs.x;
    this.y = attrs.y;
    this.width = attrs.width;
    this.height = attrs.height

    ///Ints for character stats\\\
    this.hp = attrs.hp
    this.attack = attrs.attack;
    this.isDead = false;
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

class Enemy extends Entity{
  constructor(attrs){
    super(attrs);
    this.xp = attrs.xp;
  }

  givePlayerXP(player){
    player.xp += this.xp;
  }
}

class Player extends Entity{
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
