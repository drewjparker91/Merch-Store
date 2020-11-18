import React from "react";
import * as ReactBootStrap from "react-bootstrap";


function Header () {
  return (
    <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">Hardwood Classics</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
       
          <ReactBootStrap.Nav.Link href="#NewItem">Add Item</ReactBootStrap.Nav.Link>
   
          <ReactBootStrap.Nav.Link href="#pricing">Item List</ReactBootStrap.Nav.Link>
          
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
  );
  }

export default Header;