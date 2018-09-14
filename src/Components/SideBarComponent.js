import React, { Component } from 'react';
import { Nav, NavItem} from "react-bootstrap";
import './style.css';

export default class SideBarComponent extends Component {

    renderMenuHeader(menuItem) {
        return(
            <NavItem  className ="sidebar-menu-header" eventKey={menuItem} href="#" disabled>
                <h4 className ="sidebar-menu-header-item">{menuItem}</h4>
            </NavItem>
        );
    }

    renderMenuItem(menuItem, key) {
        return(
            <NavItem  className ="sidebar-menu-button" key={key + 1} eventKey={key + 1} href="#">
                <p className ="sidebar-menu-item">{menuItem}</p>
            </NavItem>
        );
      }

    render() {
        const menuItems =this.props.menu.map((value, index)=>{
            return this.renderMenuItem(value, index)
        });

        return(
            <div id="sibebar-nav" className="col-sm-2 col-xs-4">
                <Nav  bsStyle="pills" stacked id="vijay"  onSelect={this.props.onSelect} activeKey ={this.props.activeKey}>
                    {this.renderMenuHeader(this.props.menuHeader)}
                    {menuItems}
                </Nav>
            </div>
        )
      }    
}




