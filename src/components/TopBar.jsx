import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BellFill,
  CaretDownFill,
  ChatDotsFill,
  Grid3x3GapFill,
  HouseFill,
  Linkedin,
  PeopleFill,
  SuitcaseLgFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <Navbar bg="white py-0">
      <Container>
        <Navbar.Brand href="#home">
          <Linkedin
            style={{
              color: "#0a66c2",
              fontSize: "2.5rem",
            }}
          />
        </Navbar.Brand>
        <Form className=" me-5">
          <div className="input-group bg-light">
            <span className="input-group-text bg-transparent border-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="border-0 bg-light rounded-pill py-2"
              style={{ boxShadow: "none" }}
            />
          </div>
        </Form>
        <Nav className="me-auto ms-5 align-items-center gap-1">
          {/* Elementi navigazione */}
          {[
            { icon: HouseFill, text: "Home", link: "/" },
            { icon: PeopleFill, text: "Rete" },
            { icon: SuitcaseLgFill, text: "Lavoro" },
            { icon: ChatDotsFill, text: "Messaggistica", badge: 3 },
            { icon: BellFill, text: "Notifiche" },
          ].map((item, index) => (
            <Nav.Link
              key={index}
              as={Link}
              to={item.link || "#"}
              className="text-center px-2"
              style={{
                minWidth: "80px",
                color: "#666",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              <div className="position-relative">
                <item.icon className="mb-1" style={{ fontSize: "1.5rem" }} />
                {item.badge && (
                  <span
                    style={{ top: "5px" }}
                    className="position-absolute  start-75 translate-middle badge rounded-pill bg-danger"
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              {item.text}
            </Nav.Link>
          ))}

          {/* Dropdown Profilo */}
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center" style={{ minWidth: "80px" }}>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "2px",
                  }}
                  src={profile.image}
                />
                <span style={{ fontSize: "0.75rem" }}>
                  Tu <CaretDownFill />
                </span>
              </div>
            }
            id="navbarScrollingDropdown"
            className="px-2"
          >
            <NavDropdown.Item href="#action3">
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

              <Button
                as={Link} // Usa il Link come componente
                to="/mainsection"
                className="me-2 py-0 dropLinkButton rounded-pill mt-2 border border-primary bg-white text-primary fw-semibold w-100"
              >
                Visualizza Profilo
              </Button>

              <hr style={{ borderColor: "lightgray" }} />
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
            <NavDropdown.Item href="#action6">
              <Nav.Link>Esci</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown Grid */}
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center" style={{ minWidth: "80px" }}>
                <Grid3x3GapFill
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "2px",
                  }}
                />
                <span style={{ fontSize: "0.75rem" }}>
                  Per le aziende <CaretDownFill />
                </span>
              </div>
            }
            id="navbarScrollingDropdown"
            className="px-2"
          >
            {/* ... contenuto dropdown ... */}
          </NavDropdown>
        </Nav>
        <p style={{ color: "#CC7E09", textDecoration: "underline" }}>Prova premium per 0 euro</p>
      </Container>
    </Navbar>
  );
}

export default TopBar;
