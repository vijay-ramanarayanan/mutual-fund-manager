import React, { Component } from 'react';
import ToolBar from './ToolBarContainer';
import Dashboard from './DashBoardContainer';

export default class MainContent extends Component {
    render() {
        return(

            <div   id="wrapper" className="col-lg-9 col-md-8 col-sm-8 col-xs-8 ">
                {<ToolBar/>}
                <Dashboard/>
            </div>
       );
    }
}
