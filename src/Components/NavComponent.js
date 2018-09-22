import React, {Component} from 'react';
import './style.css'
export default class NavComponent extends Component {
    render() {

        const x = 39.25; // FETCH IT FROM SERVICE
        return(
            <div className = "mutual-fund-nav-value">
                <p className = "nav-description">Current Nav :</p> 
                <p className = "nav-value">{x}</p> 
                <p className="glyphicon glyphicon-triangle-top nav-increase"></p>
                <p className="nav-increase-value">{0.02}</p>


            </div>
        )
    }
}