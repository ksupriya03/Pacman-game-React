import React from 'react';
import './classes.css';
import Board from './Board';
//window.addEventListener('keydown', checkArrow);

function checkArrow(event) {
  console.log('inside checkarrow func');
  const keyvalue = event.keyCode;
  console.log('keyvalue' + keyvalue);
  if (keyvalue === 37) {
    appState.player.direction = 'left';
    /*   console.log(appState.player.direction);
    console.log('appstate' + appState); */
    //Player(appState.player);
  }
  if (keyvalue === 38) {
    appState.player.direction = 'up';
    //Player(appState.player);
  }
  if (keyvalue === 39) {
    appState.player.direction = 'right';
    //Player(appState.player);
  }
  if (keyvalue === 40) {
    //console.log(appState.player.direction);
    console.log('appstate' + appState);
    appState.player.direction = 'down';
    //Player(appState.player);
  }
  return <div>{Player(appState.player)}</div>;
}
const checkcollision = ({ x, y, direction }) => {
  let board = appState.board;
  let value = 'null';
  console.log(direction);
  if (direction === 'left') {
    value = board[y][x - 1];
  }
  if (direction === 'right') {
    value = board[y][x + 1];
  }
  if (direction === 'up') {
    value = board[y + 1][x];
  }
  if (direction === 'down') {
    value = board[y - 1][x];
  }
  return value;
  //console.log('value is' + value);
};

function Player(player) {
  console.log('player function' + player.direction + 'x:' + player.x);
  let direction = player.direction;
  let x = player.x;
  let y = player.y;
  let collisionVal = checkcollision({ x, y, direction });
  console.log('collisionVal' + collisionVal);
  if (collisionVal !== 1) {
    if (direction === 'left') {
      appState.board[y][x] = 3;
      x = x - 1;
      appState.board[y][x] = 5;
    }
    if (direction === 'right') {
      appState.board[y][x] = 3;
      x = x + 1;
      appState.board[y][x] = 5;
    }
    if (direction === 'up') {
      appState.board[y][x] = 3;
      y = y - 1;
      appState.board[y][x] = 5;
    }
    if (direction === 'down') {
      appState.board[y][x] = 3;
      y = y + 1;
      appState.board[y][x] = 5;
    }
    appState.player.x = x;
    appState.player.y = y;
    console.log('appstate board' + appState.board);
    /*  if (collisionVal === 2) {
      appState.player.score += 1;
      appState.board[y][x] = 3;
    }{Board(appState)} */
  }
  return <div>hi</div>;
}
/*const Square = square => {
  console.log('square');
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

const Score = ({ player }) => {
  return (
    <div>
      <div>{player.name}</div>
      <span>{player.score} pts.</span>
    </div>
  );
};

 const Board = state => {
  console.log('insisde board function' + state.board);
  const board = state.board;
  const rows = board.map((item, i) => {
    return (
      <div key={i} className="row">
        {Square(item)}
      </div>
    );
  });
  return (
    <div>
      
      {rows}
    </div>
  );
}; */

let emptyBoard =
  //1=<div class="wall"></div>
  //2= <div class="coin"></div>
  //3=<div class="ground"></div>
  //5= <div class="pacman"></div>
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

const appState = {
  board: emptyBoard.slice(0),
  player: {
    name: 'Player1',
    score: 0,
    direction: 'right',
    x: 6,
    y: 4,
  },
};

class PacmanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appVal: appState };
    this.handleKey = this.handleKey.bind(this);
    this.Player = this.Player.bind(this);
  }
  Player(player) {
    console.log('player' + player.direction);
    console.log('player function' + player.direction + 'x:' + player.x);
    let direction = player.direction;
    let x = player.x;
    let y = player.y;
    let collisionVal = checkcollision({ x, y, direction });
    console.log('collisionVal' + collisionVal);
    if (collisionVal !== 1) {
      if (direction === 'left') {
        appState.board[y][x] = 3;
        x = x - 1;
        appState.board[y][x] = 5;
      }
      if (direction === 'right') {
        appState.board[y][x] = 3;
        x = x + 1;
        appState.board[y][x] = 5;
      }
      if (direction === 'up') {
        appState.board[y][x] = 3;
        y = y - 1;
        appState.board[y][x] = 5;
      }
      if (direction === 'down') {
        appState.board[y][x] = 3;
        y = y + 1;
        appState.board[y][x] = 5;
      }
      appState.player.x = x;
      appState.player.y = y;
      console.log('appstate board' + appState.board);
    }
    this.setState({ appState: appState });
  }
  handleKey(event) {
    const keyvalue = event.keyCode;
    console.log('keyvalue' + keyvalue);
    if (keyvalue === 37) {
      appState.player.direction = 'left';
    }
    if (keyvalue === 38) {
      appState.player.direction = 'up';
    }
    if (keyvalue === 39) {
      appState.player.direction = 'right';
    }
    if (keyvalue === 40) {
      console.log('appstate' + appState.player.direction);

      appState.player.direction = 'down';
      console.log('appstate down' + appState.player.direction);
    }
    this.setState({ appState: appState });
    this.Player(appState.player);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  render() {
    console.log('render method');
    return (
      <div className="game">
        <div>
          {/*  <Score player={appState.player} /> */}
          <Board state={this.state.appVal} />
        </div>
      </div>
    );
  }
}

export default PacmanApp;
