import React, {Component} from 'react';
import SideBarComponent from '../Components/SideBarComponent';
import actions from '../Actions/SideBarActions';
import {sidebarMenu} from '../utils/SideBarOptions'

import {connect} from 'react-redux';

class SideBar extends Component {

    render() {
        return(
            <SideBarComponent menu = {sidebarMenu()} onSelect = {this.props.changeActiveMenuOption} menuHeader = "" activeKey = {this.props.activeView}/>
        )
    }
}

//const mapStateToProps = ({mutualFunds}) => (mutualFunds.activeView);
const mapStateToProps = ({mutualFunds}) => ({activeView: mutualFunds.activeView})


const mapDispatchToProps = (dispatch) => ({
    changeActiveMenuOption : (selectedKey) => dispatch(actions.changeActiveOption(selectedKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
