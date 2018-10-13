import React, {Component} from 'react';
import MutualFundOverViewComponent from '../Components/MutualFundOverviewComponent';
import actions from '../Actions/SideBarActions';
import {connect} from 'react-redux';


class MutualFundOverView extends Component {


    render() {
        return(
            <MutualFundOverViewComponent showForecast = {this.props.showForeCastView}
                                         onForecastClick = {this.props.showForecastView}
            />
        );
    }
}

const mapStateToProps = ({mutualFunds}) => {
    const {showForeCastView} = mutualFunds;
    return ({showForeCastView});
}

const mapDispatchToProps = (dispatch) => ({
    showForecastView: () => dispatch(actions.displayForecastView())
});

export default connect(mapStateToProps, mapDispatchToProps)(MutualFundOverView)
