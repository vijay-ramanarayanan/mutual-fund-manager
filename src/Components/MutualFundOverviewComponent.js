import React, {Component} from 'react';
import RatingMeter from '../Containers/RatingMeterContainer';
import './style.css';
import Nav from '../Containers/NavContainer';

export default class MutualFundOverViewComponent extends Component {
    render() {
        return(
                <div className="mutual-fund-container">
                <button className="forecast-router" onClick = {this.props.handleClick}>Click here for forecasts</button>
                {<Nav/>}
                <div className="">                
                    <RatingMeter/>
                <div>
                    </div>
                </div>
                </div>
        )}
}