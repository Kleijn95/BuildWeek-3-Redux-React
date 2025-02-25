import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BellFill, ChatDotsFill, HouseFill, Linkedin, PeopleFill, SuitcaseLgFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { useEffect } from "react";

function TopBar() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

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
        <Nav className="me-auto align-items-center gap-3 ms-5">
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
              <div className="d-flex flex-column align-items-center position-relative">
                {/* Immagine sopra */}
                <img
                  src={profile.image}
                  alt="Profile"
                  style={{
                    width: "24px", // Dimensione dell'immagine
                    height: "24px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "4px", // Spazio tra l'immagine e il testo
                  }}
                />
                {/* Testo "Tu" con freccia */}
                <div className="d-flex align-items-center">
                  Tu
                  {/* Freccia del dropdown (aggiunta manualmente) */}
                  <span className="dropdown-arrow"></span>
                </div>
              </div>
            }
            id="navbarScrollingDropdown"
            className="custom-dropdown pt-0" // Aggiungi una classe per il CSS personalizzato
          >
            <NavDropdown.Item href="#profile">
              <div className="d-flex align-items-center mt-3">
                <img
                  src={profile.image || "https://via.placeholder.com/50"}
                  alt="Profile"
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <p className="mb-0 fw-bold">
                    {profile.name} {profile.surname}
                  </p>
                  <p className="mb-0">{profile.title}</p>
                </div>
              </div>

              <Button className="me-2 py-0 dropLinkButton rounded-pill mt-2 border border-primary bg-white text-primary fw-semibold w-100">
                Visualizza Profilo
              </Button>
            </NavDropdown.Item>
            <hr style={{ borderColor: "lightgray" }} className="mb-0" />

            {/* Sezione Account */}
            <NavDropdown.Header className="dropdown-header">Account</NavDropdown.Header>
            <NavDropdown.Item href="#settings" className="dropdown-item">
              Impostazioni e privacy
            </NavDropdown.Item>
            <NavDropdown.Item href="#help" className="dropdown-item">
              Guida
            </NavDropdown.Item>
            <NavDropdown.Item href="#language" className="dropdown-item">
              Lingua
            </NavDropdown.Item>

            <NavDropdown.Divider />

            {/* Sezione Gestisci */}
            <NavDropdown.Header className="dropdown-header">Gestisci</NavDropdown.Header>
            <NavDropdown.Item href="#posts" className="dropdown-item">
              Post e attività
            </NavDropdown.Item>
            <NavDropdown.Item href="#publishing" className="dropdown-item">
              Account per la pubblicazione
            </NavDropdown.Item>

            <NavDropdown.Divider />

            {/* Esci */}
            <NavDropdown.Item href="#logout" className="dropdown-item">
              Esci
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopBar;
