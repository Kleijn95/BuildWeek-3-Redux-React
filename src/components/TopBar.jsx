import { Button, Card, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BellFill, ChatDotsFill, HouseFill, Linkedin, PencilSquare, PeopleFill, SuitcaseLgFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TopBar() {
  const profile = useSelector((state) => state.myprofile.data);
  if (!profile) {
    return <p>Caricamento...</p>;
  }
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
          <NavDropdown
            title={
              <img
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={profile.image}
              ></img>
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <p>
                      {profile.name} {profile.surname}
                    </p>

                    <PencilSquare />
                  </Card.Title>
                  <p>{profile.title}</p>
                  <Button variant="primary" className="me-2 rounded-pill">
                    Visualizza Profilo
                  </Button>
                </Card.Body>
              </Card>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              <h5>Account</h5>
              <Nav.Link>Impostazioni e privacy</Nav.Link>
              <Nav.Link>Guida</Nav.Link>
              <Nav.Link>Lingua</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              <h5>Gestisci</h5>
              <Nav.Link>Post e attività</Nav.Link>
              <Nav.Link>Account per la pubblicazione</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              <Nav.Link>Esci</Nav.Link>
            </NavDropdown.Item>
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

<p></p>;
