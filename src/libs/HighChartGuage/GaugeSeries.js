import React from "react";
import Highcharts from "highcharts";
import './rater.css';
import {
  HighchartsChart,
  withHighcharts,
  Series,
  XAxis,
  YAxis,
} from "react-jsx-highcharts";

const plotOptions = {
  solidgauge: {
    dataLabels: {
      y: 6,
      borderWidth: 0,
      useHTML: true
    }
  }
};

const paneOptions = {
  center: ["50%", "75%"],
  size: "100%",
  startAngle: -90,
  endAngle: 90,
  background: {
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
    innerRadius: "60%",
    outerRadius: "100%",
    shape: "arc",
}
};

const GraphRender = ({ data }) => {
  return (
    <div className="gauge-empty">
      <HighchartsChart
        chart={{ type: "solidgauge",
        backgroundColor: '#FCFFC5',
        height : "40%",
        borderRadius: 20,
        borderWidth: 2,    
        title: {
          text: 'Title aligned left',
          align: 'left',
          x: 70
      },
    
      }}
        plotOptions={plotOptions}
        pane={paneOptions}
      >
        <XAxis />

        <YAxis
          id="myAxis"
          min={0}
          max={5}
          lineWidth={0}
          minorTickInterval={null}
          tickInterval={5/256}
          tickAmount={2}
          title={{
            y: -90,
          text : "Our Rating"
          }}
          labels={{ y: 16 }}

          stops={[
    [0.5, 'red'],
    [0.5, 'green']
  ]}
        >
          <Series
            id="gauge-test"
            name="gauge-test"
            data={[4]}
            type="solidgauge"
            title= "title"
          />



        </YAxis>
      </HighchartsChart>
    </div>
  );
};

const Gauge = ({ data }) => <GraphRender data={data} />;

export default withHighcharts(Gauge, Highcharts);
