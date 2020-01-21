import React from 'react';
import ReactDOM from 'react-dom';
import Numpad from './Numpad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalScore: 0,
      frameScore: 0,
      frameNum: 1,
      numPinsStanding: 10,
    }

    this.hitPins = this.hitPins.bind(this);
  }

  hitPins(countOfPins) {
    let newNumPins = this.state.numPinsStanding - countOfPins;
    if (newNumPins <= 0) {
      this.gameOver();
    } else {
      this.setState({
        numPinsStanding: newNumPins,
        frameNum: this.state.frameNum + 1,
        frameScore: 10,
        totalScore: this.state.totalScore + this.state.frameScore
      }, () => { console.log(this.state) })
    }
  }

  updateScore() {

  }

  gameOver() {
    console.log('Game over!');
  }

  render() {

    return (
      <div>
        <div>Number of Pins Standing: {this.state.numPinsStanding}</div>
        <div>Total Score: {this.state.totalScore}</div>
        <div>Round Number: {this.state.frameNum}</div>
        <Numpad hitPins={this.hitPins}></Numpad>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));