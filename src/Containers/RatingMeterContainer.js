import React, {Component} from 'react';
import ReactSpeedometer from '../Components/RatingMeterComponent';

export default class RatingMeter extends Component {
    render() {
       return <ReactSpeedometer
       value={3.33}
       maxValue={5}
       segments={5}
       needleColor="steelblue"
       height={250}
       width={400}
       needleTransitionDuration={5000}
       needleTransition="easeElastic"
   />
   
   
    }
}