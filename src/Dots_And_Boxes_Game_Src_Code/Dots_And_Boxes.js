import React from 'react'
import Game from './Game'

class Dots_And_Boxes extends React.Component {
  render() {
    console.log("Game Started!");
    return <Game width={4} height={4} depth={2} movesRandomized={true} />;
  }
}

export default Dots_And_Boxes;
