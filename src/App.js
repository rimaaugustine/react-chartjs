import React, { Component } from 'react';
import Request from 'superagent';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
//import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import Chip from 'material-ui/Chip';
//import {Bar} from 'react-chartjs-2';



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
    
        <Chip style={styles.chip} >kWh</Chip> <Chip style={styles.chip}  >Day</Chip>
       
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
   
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
     <div>
     <AppBar name= "stylesOverriding"
            title={<span style={titleStyles.title}>Household Total</span>} titleStyle={titleStyles.color}
            style={{backgroundColor: "#37474F"}}
            iconElementLeft={iconTitle}
            iconElementRight={rightButtons}
     />
     
      <Chart />
     
      <br />
  
      
      </div>

      
      </MuiThemeProvider>
      
        
     
   
    );
  }
}

export default App;
