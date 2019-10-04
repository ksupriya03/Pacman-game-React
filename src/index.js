import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PacmanApp from './pacmanApp';
import * as serviceWorker from './serviceWorker';

// -----------------------------------------------------------------------------
// App State
// -----------------------------------------------------------------------------

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

export let appState = {
  board: emptyBoard.slice(0),
  player: {
    name: 'Player1',
    score: 0,
    direction: 'right',
    x: 6,
    y: 4,
  },
};

ReactDOM.render(
  <PacmanApp appstate={appState} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
