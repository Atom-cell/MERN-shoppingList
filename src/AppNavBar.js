import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
function AppNavBar() {
  return (
    <div>
      <Navbar color="dark" dark expand="sm" full>
        <NavbarBrand href="/">Shopping List</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavbarText>
            <NavLink href="https://github.com/Atom-cell">GitHub</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavBar;
