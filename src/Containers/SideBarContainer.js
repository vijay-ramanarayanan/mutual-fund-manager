import React, {Component} from 'react';
import SideBarComponent from '../Components/SideBarComponent';

export default class SideBar extends Component {

    handleSelect(selectedKey) {
       /* this.setState({
                activeKey : selectedKey
        });*/
        alert(selectedKey);
      }

    render() {
        let items = ["Option1", "Option2", "Option3", "Option4", "Option5"]
        return(
            <SideBarComponent menu = {items} onSelect = {this.handleSelect} menuHeader = "Investments" />
        )
    }
}