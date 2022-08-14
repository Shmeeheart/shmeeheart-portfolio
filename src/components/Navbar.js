import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Navcomp(props) {
  const clickHandler = (e) => {
    const id = e.target.id;
    props.setPageState(id);
  };

  return (
    <div>
      <Navbar>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <Nav className='me-auto' navbar>
          <NavItem>
            <NavLink onClick={clickHandler} id='about' href='#'>
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={clickHandler} id='contact' href='#'>
              Contact Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={clickHandler} id='portfolio' href='#'>
              Portfolio
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navcomp;
