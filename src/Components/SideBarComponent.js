import React, { Component } from 'react';
import { Nav, NavItem} from "react-bootstrap";
import './navstyle.css';

export default class SideBarComponent extends Component {

    renderMenuHeader(menuItem) {
        return(
            <NavItem  className ="sidebar-menu-header" eventKey={menuItem} href="#" disabled>
                <p className ="sidebar-menu-header-item">{menuItem}</p>
            </NavItem>
        );
    }

    renderMenuItem(menuItem) {
        let className = menuItem.key === this.props.activeKey ? "sidebar-menu-button-selected" : "sidebar-menu-button";
        return(
            <NavItem  className ={className} key={menuItem.key} eventKey={menuItem.key} href="#">
                {menuItem.icon && <img src = {menuItem.icon} className = "sidebar-icons"/>}
                <p className ="sidebar-menu-item">{menuItem.name}</p>
            </NavItem>
        );
      }

    render() {
        const menuItems =this.props.menu.map((value)=>{
            return this.renderMenuItem(value)
        });

        return(
            <div id="sibebar-nav" className="col-lg-3 col-md-4 col-sm-4 col-xs-4 fixed">
            <Nav  bsStyle="pills" stacked id="sidebar-mutual-fund-nav"  onSelect={this.props.onSelect} activeKey = {this.props.activeKey}>
                    {this.renderMenuHeader(this.props.menuHeader)}
                    {menuItems}
            </Nav>
            </div>
        )
      }    
}

//                {menuItem.icon && <img src = {menuItem.icon} className = "sidebar-icons"/>}



