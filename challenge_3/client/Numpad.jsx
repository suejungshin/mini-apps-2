import React from 'react';

const Numpad = (props) => {

  return (
    <div className="numpad-container">
      {Array.from({length: 11}, (v, i) => <div className="num-button">{i}</div>)}
    </div>
  )

}

export default Numpad;