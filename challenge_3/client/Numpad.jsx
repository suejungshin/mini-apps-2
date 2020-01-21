import React from 'react';

class Numpad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numPinsHit: 0,
    }

    this.selectNumPins = this.selectNumPins.bind(this);
  }

  selectNumPins(event) {
    let numPins = event.target.id;
    this.props.hitPins(numPins);
  }

  render() {
    return (
      <div className="numpad-container">
        {Array.from({ length: 11 }, (v, i) => <div className="num-button" key={i} id={i} onClick={this.selectNumPins}>{i}</div>)}
      </div>
    )
  }

}

export default Numpad;