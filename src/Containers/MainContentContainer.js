import React, { Component } from 'react';
import DashboardComponent from '../Components/DashboardComponent';
import MutualFundDetails from './ActiveMutualFundContainer';

export default class MainContent extends Component {
    render() {
        return(

            <div   id="wrapper" className="col-lg-9 col-md-8 col-sm-8 col-xs-8 ">
            {/*<MutualFundDetails/>*/}
              {  <DashboardComponent/>}
            </div>
       );
    }
}
