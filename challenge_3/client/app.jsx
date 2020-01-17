import React from 'react';
import ReactDOM from 'react-dom';
import Numpad from './Numpad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {

    return (
      <div>
        <Numpad></Numpad>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));