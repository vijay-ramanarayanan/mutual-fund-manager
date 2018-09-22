import React, {Component} from 'react';
import RatingMeter from '../Containers/RatingMeterContainer';
import './style.css';
import Nav from '../Containers/NavContainer';

export default class MutualFundOverViewComponent extends Component {
    render() {
        return(
                <div className="mutual-fund-container">
                <div className ="mutual-fund-header-div">
                <h3 className="overview-text">Mutual Fund Overview </h3>
                <button className="forecast-router" onClick = {this.props.handleClick}>Click here for forecasts</button>
                </div>

                {<Nav/>}

                <h1 className="rating-text">Our Rating</h1>
                <div>                
                    <RatingMeter/>
                <div>
                    </div>
                </div>
                </div>
        )}
}