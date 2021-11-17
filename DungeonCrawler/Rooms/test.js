let rooms = [];
let count = 0;
const makeNewRoom = () => {
  console.log(entities);
  rooms.push(new Room({roomId: count++, moveOptions: [false, true, false, false], hasTreasure: false, enemies: [entities.Player, entities.Enemey]}));

}

const drawRoom = (index) => {
  rooms[index].draw();
}
