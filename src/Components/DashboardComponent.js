import React, { Component } from 'react';
import './style.css';
import MutualFundOverView from '../Containers/MutualFundOverViewContainer';

export default class Dashboard extends Component {
    render() {
        return(                    
            <div id="dashboard-row" className="row">
                <div className="dashboard">
                    <MutualFundOverView/>
                </div>
            </div>
        )
    }
}