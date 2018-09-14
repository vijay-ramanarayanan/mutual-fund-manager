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

    renderMenuItem(menuItem) {
        let className = menuItem.key === this.props.activeKey ? "sidebar-menu-button-selected" : "sidebar-menu-button";
        return(
            <NavItem  className ={className} key={menuItem.key} eventKey={menuItem.key} href="#">
                <p className ="sidebar-menu-item">{menuItem.name}</p>
            </NavItem>
        );
      }

    render() {
        const menuItems =this.props.menu.map((value)=>{
            return this.renderMenuItem(value)
        });

        return(
            <div id="sibebar-nav" className="col-sm-2 col-xs-4">
                <Nav  bsStyle="pills" stacked id="vijay"  onSelect={this.props.onSelect} >
                    {this.renderMenuHeader(this.props.menuHeader)}
                    {menuItems}
                </Nav>
            </div>
        )
      }    
}




