import React from 'react';
import { Link } from "react-router-dom";
import "../css/toolbar.css"

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl } from 'react-bootstrap';

export default function Footer() {

  return (
    <>
      <Navbar id="footer" className="justify-content-center" bg="dark" variant="dark" fixed="bottom">
        <Nav className="justify-content-center" activeKey="/home">
          <Navbar.Text>
            ActivityGo ©2020
          </Navbar.Text>


          <Nav.Item>

          </Nav.Item>
        </Nav>
      </Navbar>

    </>
  )
}
