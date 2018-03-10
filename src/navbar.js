import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from "material-ui/Subheader"
import * as Colors from 'material-ui/styles/colors';

const titleStyles = {
  color:{
    color: Colors.grey200
  }
};


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.switchDrawer = this.switchDrawer.bind(this)
  }

  switchDrawer = () => this.setState({open: !this.state.open});
  render() {
  
    return (
      <AppBar title={<span style={titleStyles.title}>NudgE</span>} titleStyle={titleStyles.color}  onLeftIconButtonClick={this.switchDrawer}>
            
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={this.switchDrawer}>
        <Subheader
          style={{
            height: "50px",
            width: "304px",
            backgroundColor: "#00838f",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "normal"
          }}
          >
               
          <div style={{ marginBottom: "26px" }}>
            Welcome Max! 
          </div>
        </Subheader>
        <MenuItem>Setting</MenuItem>
        <MenuItem href={'/setting'}>Logout</MenuItem>

      </Drawer>
  
</AppBar>  
    
    );
  }
}

export default Navbar;
