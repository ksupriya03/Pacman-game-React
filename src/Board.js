import React from 'react';
import './classes.css';
//Board class does looping of the array index and assign the image based on the classname.

const Square = square => {
  //console.log('square');
  let classVal = 'wall';
  const squares = square.map((item, i) => {
    if (item === 5) classVal = 'pacman';
    if (item === 1) classVal = 'wall';
    if (item === 2) classVal = 'coin';
    if (item === 3) classVal = 'ground';
    return <div key={i} className={classVal} />;
  });
  return squares;
};
class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const board = this.props.state.board;
    const rows = board.map((item, i) => {
      return (
        <div key={i} className="row">
          {Square(item)}
        </div>
      );
    });
    return (
      <div>
        {/*  {Player(state.player)} */}
        {rows}
      </div>
    );
  }
}

export default Board;
