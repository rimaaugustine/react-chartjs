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
//import {Bar} from 'react-chartjs-2';
import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios';
import Chart from './chart.js'

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



class App extends Component {
  

  render() {
//want to iterate the date from api 

    
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

 //return HTML

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
      
      <Chart />
    
      </div>
      </Card>
      <br />
      <RaisedButton label="Update" primary={true}  />  

      </MuiThemeProvider>
      
         
     
      </div>
    );
  }
}

export default App;
