import React from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  withHighcharts,
  Series,
  XAxis,
  YAxis
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
  center: ["50%", "45%"],
  size: "80%",
  startAngle: -90,
  endAngle: 90,
  background: {
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
    innerRadius: "60%",
    outerRadius: "100%",
    shape: "arc"
  }
};

const GraphRender = ({ data }) => {
  return (
    <div className="gauge-empty">
      <div className="no-data">Our Rating</div>
      <HighchartsChart
        chart={{ type: "solidgauge" }}
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
            y: -70
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
          />



        </YAxis>
      </HighchartsChart>
    </div>
  );
};

const Gauge = ({ data }) => <GraphRender data={data} />;

export default withHighcharts(Gauge, Highcharts);
