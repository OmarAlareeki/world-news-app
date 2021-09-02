import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import '../../../styles/components.css';
import Logo from "../logo/logo.png"

const Navigation = () => {
  return (
    <div className="nav-container" style={{paddingBottom:'5rem'}}>
      <Navbar collapseOnSelect bg="light" variant='light' expand="lg">
        <Container>
          <Navbar.Brand href="/home" style={{padding: '1em'}}>
          <img src={Logo} alt="logo" width="30px" height="30px"/>
          {' '}WORLD NEWS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav justify>
              <Nav.Link href="/sports" className="link">Sports</Nav.Link>
              <Nav.Link href="/politics" className="link">Politics</Nav.Link>
              <Nav.Link href="/health" className="link">Health</Nav.Link>
              <Nav.Link href="/business" className="link">Business</Nav.Link>
                <NavDropdown title="More " id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Delta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Covid 19</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Stocks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Tech Business</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Movies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Currency</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
              style={{
              border:' 1px solid #be7272',
              borderRadius: '20px',
              opacity: '0.4',
              marginLeft: '50px',
              }}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              />
            </Form>
            <Button color="inherit">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navigation
