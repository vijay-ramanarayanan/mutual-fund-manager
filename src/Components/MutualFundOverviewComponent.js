import React, {Component} from 'react';
import RatingMeter from '../Containers/RatingMeterContainer';
import './style.css';
import Nav from '../Containers/NavContainer';

export default class MutualFundOverViewComponent extends Component {
    render() {
        return(
                <div>
                <Nav/>
                <div className="mutual-fund-rater ">                
                    <RatingMeter/>
                <div>
                        <b>
                            Our Rating
                        </b>
                    </div>
                </div>
                </div>
        )}
}