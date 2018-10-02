import React from "react";
import Chart from "react-google-charts";

const options = {
  redFrom: 0,
  redTo: 3,
  yellowFrom: 3,
  yellowTo: 6,
  minorTicks: 5,
  greenFrom : 6,
  greenTo: 10,
  max:10,
  width:200,
  height:200,
  animation  : {
    duration : 1000,
    easing : 'linear'
  }
};

export default class RatingGuage extends React.Component {
    
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["Rating", 8]
    ];
  };

  render() {
    return (
        <Chart
          chartType="Gauge"
          data={this.getData()}
          options={options}
        />
    );
  }
}

