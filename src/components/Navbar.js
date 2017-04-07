import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

import './Navbar.css'

export default class extends React.Component {
  render () {
    return (
      <div className="bootstrap-navbar">
        <Navbar  fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Blockmate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav navbar pullRight>
              <NavItem eventKey={1} href="#">{'public'}</NavItem>
              <NavItem eventKey={2} href="#">{'private'}</NavItem>
              <NavDropdown eventKey={3} title="menu" id="basic-nav-dropdown" pullRight>
                <MenuItem eventKey={3.1}>my profile</MenuItem>
                <MenuItem eventKey={3.2}>my wallet</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>settings</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
