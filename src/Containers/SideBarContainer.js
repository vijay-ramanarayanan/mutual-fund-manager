import React, {Component} from 'react';
import SideBarComponent from '../Components/SideBarComponent';
import sideBarActions from '../Actions/SideBarActions';

import {connect} from 'react-redux';

class SideBar extends Component {

    render() {
        let items = ["Option1", "Option2", "Option3", "Option4", "Option5"]
        return(
            <SideBarComponent menu = {items} onSelect = {this.props.changeActiveMenuOption} menuHeader = "Investments" activeKey = {this.props.activeView}/>
        )
    }
}

const mapStateToProps = ({sideBar}) => ({...sideBar});

const mapDispatchToProps = (dispatch) => ({
    changeActiveMenuOption : (selectedKey) => dispatch(sideBarActions.changeActiveOption(selectedKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
