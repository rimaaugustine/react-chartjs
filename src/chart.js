import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';



class Chart extends Component {
  constructor(props) {
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    // minDate.setFullYear(minDate.getFullYear() - 2);
    // minDate.setHours(0,0,0,0)
    // maxDate.setFullYear(maxDate.getFullYear() -1);
    // maxDate.setHours(0,0,0,0)
    minDate.setDate(1)
    minDate.setMonth(0)
    minDate.setFullYear(2016)
    maxDate.setDate(31)
    maxDate.setMonth(11)
    maxDate.setFullYear(2016)
    const defaultDate = minDate
  
    this.state = {
        dates: null,
        fetched: false,
        minDate: minDate,
        maxDate: maxDate,
        DataChartConsumption : [],
         DataChartPV : [],
        DataChartVehicle: [],
        selectedDate: "",
        totalC: 0,
        totalP: 0,
        autoOk: false,
        disableYearSelection: false,
        defaultDate: defaultDate
    };
  }

  filterbyDate(date, year, month, day) {
    if (month.length == 1) {
        month = "0" + month
    }
    if (day.length == 1) {
        day = "0" + day
    }
  const splitDate =  date.split("-")
  const dateYear = splitDate[0]
  const dateMonth = splitDate[1]
  const dateDay = splitDate[2]
  if (dateYear == year && dateMonth == month && dateDay == day ){
      return true  
  } else {
      return false
  }
  
  };

  handleChangeDate = (event, date) => {
    this.setState({selectedDate: date},  function () {
        const year = this.state.selectedDate.getYear() + 1900
        const month = this.state.selectedDate.getMonth() + 1
        const day = this.state.selectedDate.getDate()
        const filtered = this.state.dates.filter(item => this.filterbyDate(item.date,year,month,day))
        const consumption = filtered[0].hours.map( item => item.Value)
        const pv = filtered[0].hours.map( item => item.pv)
        const ev = filtered[0].hours.map( item => item.ev)
        const totalC =  Math.round(consumption.reduce((acc, item) => acc + item, 0))
        const totalP =  Math.round(pv.reduce((acc, item) => acc + item, 0))
        this.setState({
            DataChartConsumption: consumption,
            DataChartPV: pv,
            DataChartVehicle: ev,
            totalC: totalC,
            totalP: totalP
        })
    });
  };

  //axios.get('https://json-qjdmnnqtil.now.sh/')
  componentWillMount() {
    axios.get('https://json-xvuwofaovi.now.sh/')
    .then(res => {
      const dataJson = res.data;
      const filtered = dataJson.filter(item => this.filterbyDate(item.date, "2016", "12", "31"))
      const consumption = filtered[0].hours.map( item => item.Value)
      const pv = filtered[0].hours.map( item => item.pv)
      const ev = filtered[0].hours.map( item => item.ev)
      const totalC = Math.round(consumption.reduce((acc, item) => acc + item, 0))
      const totalP = Math.round(pv.reduce((acc, item) => acc + item, 0))
      this.setState ({
        dates: dataJson,
        fetched: true,
        DataChartConsumption: consumption,
        DataChartPV: pv,
        DataChartVehicle: ev,
        totalC: totalC,
        totalP: totalP 
      })
       
    })
  }

  fetching() {
    if (this.state.fetched) return <p>(Fetched)</p>;
    return <p>(Not Fetched)</p>;
  }
  
  
  render() {
    /*
    {
        label: 'Electric Vehicle',
        backgroundColor: '#58a5f0',
        hoverBackgroundColor: '#58a5f0',
        hoverBorderColor: '#58a5f0',
        data: this.state.DataChartVehicle,
        stack: 1
      },
     */
    const data = {
    labels: [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    datasets: [
      {
        label: 'Consumption',
        backgroundColor: '#0277bd',
        hoverBackgroundColor: '#0277bd',
        hoverBorderColor: '#0277bd',
        data:  this.state.DataChartConsumption,
        stack: 1
      },
      
      {
        label: 'Photovaltaics',
        type: 'bar',
        backgroundColor: 'rgba(85,139,47,0.5)',
        borderColor: 'rgba(133,187,92,0.6)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(133,187,92,0.6)',
        hoverBorderColor: 'rgba(133,187,92,0.6)',
        data: this.state.DataChartPV,
        stack: 2
      }
    ]
  
  }

    return (
        <Card style={{backgroundColor: "#37474F"}}>
        <div>
  
      {/*  <div className="flex-container">
        <CardTitle title={<span style={{fontSize: "40px"}}>0</span>} subtitle="Current Power in kW" />
        <CardTitle title={<span style={{fontSize: "40px"}}>0</span>} subtitle="Current Solarpower in kW" />
        <CardTitle title={<span style={{fontSize: "40px"}}>{this.state.totalC}</span>} subtitle="Consumption in kWh" />
        <CardTitle title={<span style={{fontSize: "40px"}}>{this.state.totalP}</span>} subtitle="Production in kWh"/>
        </div> */}
    
      <div>
        <div >
          <DatePicker className="date-picker" hintText="Date" 
          onChange={this.handleChangeDate}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          defaultDate={this.state.defaultDate}
          disableYearSelection={this.state.disableYearSelection}
    
           />  
           </div> 
           <div>
        <Bar
              data={data}
              options={{
                maintainAspectRatio: false,
                legend: {
                  labels: {
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
                    beginAtZero: true,
                    min: 0,
                    max: 20,
                    fontColor: '#bdbdbd',
                    fontSize: 12,
                  },
                  }]
              }
              }}
            /> 
        </div>
        </div>
        </div>
        </Card>    
    
    );
  }
}

export default Chart;
