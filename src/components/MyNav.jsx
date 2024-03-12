import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = function (props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          IFOA Library - <span className="text-info"> {props.subtitle}</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
