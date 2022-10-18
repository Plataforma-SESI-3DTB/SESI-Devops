import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styleHeader.css'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import Logo from '../../assets/logo3.png'

export default function Header() {
  return (
    <Navbar className='Header' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="#Home"><img className='Logo' src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="Sobre" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                duvidas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">objetivo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
