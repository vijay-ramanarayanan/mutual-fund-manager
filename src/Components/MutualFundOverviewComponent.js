import React, {Component} from 'react';
import './style.css';
import Nav from '../Containers/NavContainer';
import RatingGuage from '../libs/GoogleGuageChart/guage';
import TimeSeries from '../libs/TimeSeriesChart/TimeSeries'

export default class MutualFundOverViewComponent extends Component {
    render() {
        return(
                <div className="mutual-fund-container">
                <div className ="mutual-fund-header-div">
                <h2 className="overview-text">Mutual Fund Overview </h2>
                <button className="forecast-router" onClick = {this.props.handleClick}>Click here for forecasts</button>
                </div>

                {<Nav/>}
                <div className = "rater-guage">                
                    <RatingGuage/>
                </div>
                <div className = "mutal-fund-time-series">
                <TimeSeries/>

                </div>
                </div>
        )}
}