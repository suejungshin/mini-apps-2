import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Graph from './Graph.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: []
    }
    this.getData = this.getData.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      url: '/api',
      data: '',
      success: (data) => {
        console.log(data);
        let result = this.filterData(data);
        this.setState({
          labels: result[0],
          data: result[1]
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterData(apiData) {
    let dataObj = apiData.bpi;
    let dataArr = Object.keys(dataObj);
    let labels = [];
    let resultData = [];
    let resultArr = [];

    dataArr.sort((a, b) => {
      return new Date(a) - new Date(b);
    })

    for (let i = 0; i < dataArr.length; i++) {
      labels.push(dataArr[i]);
      resultData.push(dataObj[dataArr[i]]);
    }

    resultArr.push(labels, resultData)
    return resultArr;
  }


  render() {

    return (
      <div>
        <Graph labels={this.state.labels} data={this.state.data}></Graph>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app')
);