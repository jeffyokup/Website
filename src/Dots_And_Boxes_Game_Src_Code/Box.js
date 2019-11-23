import {Player, Side} from './Enums'
/*
* 0 -> Top
* 1 -> Left
* 2 -> Bottom
* 3 -> Right
 */
class Box{
  constructor(owner=null, sides=null){
    if(owner===null && sides ===null){
      this.sides = [Player.NO_PLAYER, Player.NO_PLAYER, Player.NO_PLAYER, Player.NO_PLAYER];
      this.owner = Player.NO_PLAYER;
    }else{
        this.sides = sides.slice(0); // shallow copy.
        this.owner = owner;
    }
  }

  /**
   *
   * Returns true if the box just got completed.
   * False otherwise.
   * @param player The player to set as owner of box if box just got completed.
   * @return True if box got completed.
   */
  checkBoxCompletion(player){
      var sidesCompleted = 0;
      for(var i = 0; i < 4; i++){
          if(this.sides[i] != Player.NO_PLAYER) {
              sidesCompleted++;
          }
      }
      if(sidesCompleted == 4){
          this.owner = player;
          return true;
      }
      return false;
  }

/**
 * Fills in the given side of this box.
 * @param player The player who wants to set the given side.
 * @param side The side going to be set.
 * @return true if the move completed the box. False otherwise.
 */
  setSide(player, side){
    if(player == null || side == null || player == Player.NO_PLAYER || this.owner != Player.NO_PLAYER){
               throw "Invalid argument to setSide:" + player + " " + side;
    }
    var sides = this.sides;
    switch(side){
      case Side.TOP:
        if(sides[0] === Player.NO_PLAYER){
          sides[0] = player;
        }else{
          throw "Bad side placement.";
        }
        break;
        case Side.LEFT:
          if(sides[1] === Player.NO_PLAYER){
            sides[1] = player;
          }else{
            throw "Bad side placement.";
          }
          break;
          case Side.BOTTOM:
            if(sides[2] === Player.NO_PLAYER){
              sides[2] = player;
            }else{
              throw "Bad side placement.";
            }
            break;
            case Side.RIGHT:
              if(sides[3] === Player.NO_PLAYER){
                sides[3] = player;
              }else{
                throw "Bad side placement.";
              }
              break;
    }
    return this.checkBoxCompletion(player);
  }


    getOwnerOfSide(side){
        var sides = this.sides;
        switch (side){
            case Side.TOP:
                return sides[0];
            case Side.LEFT:
                return sides[1];
            case Side.BOTTOM:
                return sides[2];
            case Side.RIGHT:
                return sides[3];
            default:
                throw "Error in getOwnerOfSide";
        }
    }

    oneMoreSideLeft(){
        var sidesFilled = 0;
        for(var i = 0; i < 4; i++){
            if(this.sides[i] != Player.NO_PLAYER){
                sidesFilled++;
            }
        }
        return (sidesFilled == 3);
    }

    clone(){
      const boxClone = Object.assign({}, this);
      return boxClone;
    }
}

export default Box;
