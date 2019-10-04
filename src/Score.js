import React from 'react';
//score board of the player
class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, score } = this.props.player;
    return (
      <div>
        <span>
          <b>Name:</b>
          {name} <b>score is:</b>
          <span style={{ color: 'blue' }}>{score}</span>
        </span>
      </div>
    );
  }
}
export default Score;
