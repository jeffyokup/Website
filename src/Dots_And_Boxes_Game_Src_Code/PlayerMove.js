
class PlayerMove{
  constructor(row, col, side, player, move = null){
    this.row = row;
    this.col = col;
    this.side = side;
    this.player = player;
    if(move === null){
        this.boardValue = 0;
    }else{
      this.boardValue = move.getBoardValue();
    }
  }

  clone(){
     const playerMoveClone = Object.assign({}, this);
      return playerMoveClone;
  }

  // toString override added to prototype of Foo class
  PlayerMove.prototype.toString = function()
  {
    const {row, col, side} = this;
    return "Row: " + row + " Col: " + col + " Side: " + side;
  }
}

export default PlayerMove;
