import { useState, useEffect, useRef } from "react";
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
  Search,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, searchJobs } from "../redux/actions/profileActions";
import { Link, useNavigate } from "react-router-dom";

function TopBar() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchExpanded(false);
      }
    }
    if (searchExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchExpanded]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchJobs(searchTerm));
    navigate("/searchresults");
    setSearchTerm("");
  };

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <Navbar
      bg="white py-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Linkedin style={{ color: "#0a66c2", fontSize: "2.5rem" }} />
        </Navbar.Brand>

        <Form className="d-none d-lg-flex" onSubmit={handleSearch}>
          <div className="input-group bg-light">
            <span className="input-group-text bg-transparent border-0">
              <Search color="#666" />
            </span>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="border-0 bg-light rounded-pill py-2"
              style={{ boxShadow: "none" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </Form>

        <Nav.Link className="d-flex d-lg-none" onClick={() => setSearchExpanded(true)}>
          <Search style={{ fontSize: "1.5rem", color: "#666", cursor: "pointer" }} />
        </Nav.Link>

        {searchExpanded && (
          <div
            ref={searchRef}
            className="position-absolute top-0 start-0 w-100 h-100 bg-white d-flex align-items-center px-3"
            style={{ zIndex: 1000 }}
          >
            <Search color="#666" className="me-2" />
            <Form onSubmit={handleSearch} className="d-flex flex-grow-1">
              <Form.Control
                type="search"
                placeholder="Cerca"
                autoFocus
                className="border-0 bg-light flex-grow-1 rounded-pill py-2"
                style={{ boxShadow: "none" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
          </div>
        )}

        <Nav className="ms-auto align-items-center flex-end gap-1">
          {[
            { icon: HouseFill, text: "Home", link: "/" },
            { icon: PeopleFill, text: "Rete" },
            { icon: SuitcaseLgFill, text: "Lavoro", link: "/jobs" },
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
                    className="position-absolute start-75 translate-middle badge rounded-pill bg-danger"
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="d-none d-md-block">{item.text}</span>
            </Nav.Link>
          ))}

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
                <span className="d-none d-md-block" style={{ fontSize: "0.75rem" }}>
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
                as={Link}
                to="/mainsection"
                className="me-2 py-0 dropLinkButton rounded-pill mt-2 border border-primary bg-white text-primary fw-semibold w-100"
              >
                Visualizza Profilo
              </Button>
              <hr style={{ borderColor: "lightgray" }} />
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center" style={{ minWidth: "80px" }}>
                <Grid3x3GapFill style={{ fontSize: "1.5rem", marginBottom: "2px" }} />
                <span className="d-none d-md-block" style={{ fontSize: "0.75rem" }}>
                  Per le aziende <CaretDownFill />
                </span>
              </div>
            }
            id="navbarScrollingDropdown"
            className="px-2"
          ></NavDropdown>
        </Nav>

        <p className="d-none d-md-block" style={{ color: "#CC7E09", textDecoration: "underline", fontSize: "0.75rem" }}>
          Prova premium per 0 euro
        </p>
      </Container>
    </Navbar>
  );
}

export default TopBar;
