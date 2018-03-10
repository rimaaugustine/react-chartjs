import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



class Notif extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  
    return (
        <Card style={{backgroundColor: "#37474F", textAlign:"center",  marginBottom: "3px",
        padding: "8px"}}>
        <CardText>
        <h3>I will start the washing machine at 12:00 today to use local renewable energy of your neighbours.</h3>
        </CardText>
        <CardActions>
        <RaisedButton label="Ok" primary={true}  />
        <RaisedButton label="Setting" primary={true}  />
        </CardActions>
        </Card>    
    
    );
  }
}

export default Notif;
