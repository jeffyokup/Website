import React from 'react'

class Dot extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: props.width,
      row: props.row,
      col: props.col,
      selectFunction: props.selectFunction
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {selectFunction, row, col} = this.state;
    selectFunction({row: row, col: col});
  }

  render() {
    return (
      <span style={{float: "left"}, {margin: 50}}>
      <svg height="100" width="100" padding="20" onClick={this.handleClick}>
        <circle cx="50" cy="50" r="40" fill={'#FF8552'} />
      </svg>
      </span>
    );
  }
}

export default Dot;
