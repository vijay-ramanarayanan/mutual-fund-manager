import React, {Component} from 'react';
import RatingMeter from '../Containers/RatingMeterContainer';
import './style.css';

export default class MutualFundOverViewComponent extends Component {
    render() {
        return(
                <div className="mutual-fund-rater ">                
                <RatingMeter/>
                <div>
                        <b>
                            Our Rating : 3.33
                        </b>
                    </div>
                </div>
        )}
}