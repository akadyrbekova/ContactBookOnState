import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-6374083-5272629.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Вы зашли как: <a href="#login">Admin</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
