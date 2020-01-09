import React, { useState } from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <div>
      <Navbar href="/" className="mr-auto">
        <NavbarBrand href="/" className="mr-auto">
          ContractBuilder9000
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/create">Create Contract</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/help">Help</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    </div>
  );
}

export default NavBar;
