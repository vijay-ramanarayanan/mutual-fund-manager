import React, { Component } from 'react';
import DashboardComponent from '../Components/DashboardComponent';
import MutualFundDetails from './ActiveMutualFundContainer';
import {connect} from 'react-redux';
import actions from '../Actions/SideBarActions';



class MainContent extends Component {
    render() {
        return(

            <div   id="wrapper" className="col-lg-9 col-md-8 col-sm-8 col-xs-8 ">
                {this.props.showMutualFundsSummary ? <MutualFundDetails/> : <DashboardComponent/>}
                
            </div>
       );
    }
}

//const mapStateToProps = ({mutualFunds}) => ({activeView: mutualFunds.activeView})
const mapStateToProps = ({mutualFunds}) => {
   return {activeView: mutualFunds.activeView,
    showMutualFundOverView : mutualFunds.showMutualFundOverView,
    showMutualFundsSummary : mutualFunds.showMutualFundsSummary
    }

}

const mapDispatchToProps = (dispatch) => ({
    changeActiveMenuOption : (selectedKey) => dispatch(actions.changeActiveOption(selectedKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)

