import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BellFill, ChatDotsFill, HouseFill, Linkedin, PeopleFill, SuitcaseLgFill } from "react-bootstrap-icons";

function TopBar() {
  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand href="#home">
          <Linkedin fill="blue" className="text-white fs-1" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Form>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="d-flex flex-column align-items-center py-0">
            <HouseFill className="fs-5" fill="grey" />
            Home
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center py-0">
            <PeopleFill className="fs-5" fill="grey" />
            Rete
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center py-0">
            <SuitcaseLgFill className="fs-5" fill="grey" />
            Lavoro
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center py-0">
            <ChatDotsFill className="fs-5" fill="grey" />
            Messaggistica
          </Nav.Link>
          <Nav.Link href="#home" className="d-flex flex-column align-items-center py-0">
            <BellFill className="fs-5" fill="grey" />
            Notifiche
          </Nav.Link>
          <NavDropdown title="Tu" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>{" "}
          <NavDropdown title="Per le Aziende" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;
