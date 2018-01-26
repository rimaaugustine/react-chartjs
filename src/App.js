import React, { Component } from 'react';
import Request from 'superagent';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
//import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import Chip from 'material-ui/Chip';
import {Bar} from 'react-chartjs-2';
import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios';

const styles = {
    chip: {
      margin: 4,
      backgroundColor: Colors.grey400,
      color : Colors.grey200 
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
  
const titleStyles = {
  title: {
    cursor: 'pointer'

  },
  color:{
    color: Colors.grey200
  }
};

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

class App extends Component {
  
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
  const dataDate = this.state.date 
   const DateList = function(props){
     console.log(props.dateDate);
     return (
      <ul>
        {
          props.dataDate.map(function(item){
            return <li> {item} </li>
          })
        }
      </ul>
     )
   }
    
    const rightButtons = (
      <div>
        <div className="flex-container">
        <Chip style={styles.chip} >kWh</Chip> <Chip style={styles.chip} >Day</Chip>
        </div>
      </div>
    );

    const iconTitle = (
        <div> 
        <IconButton style={{color:'Colors.grey200'}}><ImageFlashOn /></IconButton>
        </div>
    );
    return (
      <div>
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
  
     <AppBar name= "stylesOverriding"
            title={<span style={titleStyles.title}>Household Total</span>} titleStyle={titleStyles.color}
            style={{backgroundColor: "#37474F"}}
            iconElementLeft={iconTitle}
            iconElementRight={rightButtons}
     />
     
      <Card style={{backgroundColor: "#37474F"}}>
      <div>

      <div className="flex-container">
      <CardTitle title={<span style={{fontSize: "40px"}}>93</span>} subtitle="Current Power in kW" />
      <CardTitle title={<span style={{fontSize: "40px"}}>93</span>} subtitle="Current Solarpower in kW" />
      <CardTitle title={<span style={{fontSize: "40px"}}>93</span>} subtitle="Consumption in kWh" />
      <CardTitle title={<span style={{fontSize: "40px"}}>93</span>} subtitle="Production in kWh"/>
      </div>
      <br/>
      <br/>
      <div className = "flex-container">
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
      </div>
      </div>
      </Card>
      <br />
      <RaisedButton label="Update" primary={true}  />
       {this.fetching()}
     
      </MuiThemeProvider>
      
         
     
      </div>
    );
  }
}

export default App;
