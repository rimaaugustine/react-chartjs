import React, { Component } from 'react';
import Routes from './routes'
import Request from 'superagent';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
//import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import {Bar} from 'react-chartjs-2';

//import component
import Chart from './chart.js'
import Notif from './notif';
import Navbar from './navbar';
//import Main from '/main.js';


class App extends React.Component {
 constructor(props){
   super(props)
  
 }
  
  render() {    

 //return HTML

    return (
   
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
     <div>
      <Navbar />
      <Notif />
      <Chart />
     <Routes />
     </div>  
      </MuiThemeProvider>
     
    );
  }
}

export default App;
