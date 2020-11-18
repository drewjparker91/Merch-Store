import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

  function Header() {
    return (
          
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Avery's Organic</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#marketSchedule">Schedule</Nav.Link>
            <Nav.Link href="#availableProduce">Available Produce</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
    )
// function Header () {
//   return (
//     <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <ReactBootStrap.Nav className="mr-auto">
//           <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
//           <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
//         </ReactBootStrap.Nav>
//         <ReactBootStrap.Nav>
//           <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
//           <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
//             Dank memes
//           </ReactBootStrap.Nav.Link>
//         </ReactBootStrap.Nav>
//       </Navbar.Collapse>  
//     </ReactBootStrap.Navbar>
//   );
  }

export default Header;