let rooms = [];
let count = 0;
let roomTest = 0;
const makeNewRoom = () => {
  rooms.push(new Room({roomId: count++, moveOptions: [false, true, false, false], hasTreasure: false, enemies: [entities.Player, entities.Enemey], roomColor: 'blue'}));
  rooms.push(new Room({roomId: count++, moveOptions: [false, true, false, false], hasTreasure: false, enemies: [entities.Player, entities.Enemey], roomColor: 'red'}));

}

const flipBetweenRoom = () =>{
  drawRoom(roomTest++);
  if(roomTest === rooms.length){
    roomTest = 0;
  }
}
const drawRoom = (index) => {
  rooms[index].draw();
}
