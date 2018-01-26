import React, { Component } from 'react';
import Request from 'superagent';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

import {Bar} from 'react-chartjs-2';
import axios from 'axios';


const data = {
  labels: [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  datasets: [
    {
      label: 'Consumption',
      backgroundColor: '#0277bd',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 55],
      stack: 1
    },
    {
      label: 'Electric Vehichle',
      backgroundColor: '#58a5f0',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 55],
      stack: 1
    },
    {
      label: 'Photovaltaics',
      type: 'bar',
      backgroundColor: 'rgba(85,139,47,0.5)',
      borderColor: 'rgba(133,187,92,0.6)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(133,187,92,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 55],
      stack: 2
    }
  ]

}

class Chart extends Component {
  
  constructor() {
    super();
    this.state = {
      date: [],
      fetched: false
    };
  }
  componentDidMount() {
    axios.get('https://json-ibaoiethzi.now.sh/testok.json')
    //https://https://json-ibaoiethzi.now.sh/consumption.json
    .then(res => {
      const data = res.data;
      console.log(data)
      this.setState ({
        date: data.Date,
        fetched: true
      })
    })
  }

  fetching() {
    if (this.state.fetched) return <p>(Fetched)</p>;
    return <p>(Not Fetched)</p>;
  }

  render() {
//want to iterate the date from api 


 
    return (
      <div>
     
     <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                  // This more specific font property overrides the global property
                  fontColor: '#bdbdbd'
              }
            },
            scales:{
              xAxes: [{
              stacked: true,
              ticks: {
                fontColor: '#bdbdbd',
                fontSize: 12,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                
              
              }
              }],
              yAxes: [{
              stacked: true,
              ticks: {
                fontColor: '#bdbdbd',
                fontSize: 12,
              },
              }]
          }
          }}
        />    

{this.fetching()}
      </div>
    );
  }
}

export default Chart;
