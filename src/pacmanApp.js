import React from 'react';
import './classes.css';
import Board from './Board';
import Score from './Score';
//window.addEventListener('keydown', checkArrow);

//this function avoids moving out of the wall based on the value
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
    value = board[y - 1][x];
  }
  if (direction === 'down') {
    value = board[y + 1][x];
  }
  return value;
  //console.log('value is' + value);
};

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
  //main method which involves in movement of pacman and updating state for score and also appstate
  Player(player) {
    //console.log('player' + player.direction);
    console.log(
      'player function' + player.direction + 'x:' + player.x + 'y:' + player.y,
    );
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
      if (collisionVal == 2) {
        appState.player.score += 10;
      }
      console.log('appstate board' + appState.board);
      this.setState({ appState: appState });
    }
  }
  //based on the key code direction is been set for the state
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
      //console.log('appstate' + appState.player.direction);

      appState.player.direction = 'down';
      console.log('appstate down' + appState.player.direction);
    }
    this.setState({ appState: appState });
    this.Player(appState.player);
  }
  //event listener handler for handling arrow keys
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  render() {
    console.log('render method');
    return (
      <div className="game">
        <h1
          style={{
            color: 'cornflowerblue',
            fontStyle: 'normal',
            fontFamily: 'fantasy',
            textAlign: 'center',
          }}>
          PACMAN-GAME
        </h1>
        <div>
          <Score player={this.state.appVal.player} />
          <br />
          <Board state={this.state.appVal} />
        </div>
      </div>
    );
  }
}

export default PacmanApp;
