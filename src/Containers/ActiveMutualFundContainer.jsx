import React, {Component} from 'react';
import {connect} from 'react-redux';
import ActiveMutualFund from '../Components/ActiveMutualFundComponent';
import actions from '../Actions/SideBarActions';
import MutualFunds from '../utils/MutualFunds';


class MutualFundDetails extends Component {
    constructor() {
        super();
        this.mutualFunds = new MutualFunds();
    }

    mutualFundTable() {
        switch(this.props.activeView) {
            case "Axis" :
                return this.mutualFunds.fetchAxisBankData();
            case "Reliance" :
                return this.mutualFunds.fetchRelianceBankData();
            case "SBI" :
                return this.mutualFunds.fetchSBIData();
            case "AdityaBirla" :
                return this.mutualFunds.fetchAdityaBankData();
            case "ICICI" :
                return this.mutualFunds.fetchICICIBankData();
            case "HDFC" :
                return this.mutualFunds.fetchHDFCData();


            default :
            return this.mutualFunds.fetchRelianceBankData();
        }
    }

    render() {
        return(<ActiveMutualFund columns = {this.mutualFunds.getColumns()} 
                                 rows = {this.mutualFundTable()}
                                onClick = {this.props.showSelectedFund}
        />);
    }
}

const mapStateToProps = ({mutualFunds}) => {
    const {showMutualFundOverView, activeView} = mutualFunds;
    return ({showMutualFundOverView, activeView});
}

const mapDispatchToProps = (dispatch) => ({
    showSelectedFund : (selectedFund) => dispatch(actions.displaySelectedFundOverview(selectedFund))
});

export default connect(mapStateToProps, mapDispatchToProps)(MutualFundDetails)
