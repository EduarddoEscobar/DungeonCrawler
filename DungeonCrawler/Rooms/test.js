let rooms = [];
let count = 0;
const makeNewRoom = () => {
  rooms.push(new Room({roomId: count++, moveOptions: [false, true, false, false], hasTreasure: false, enemySprites: ["../Sprites/EnemySprite.png", "../Sprites/PlayerSprite.png"]}));
}

const drawRoom = (index) => {
  rooms[index].draw();
}
