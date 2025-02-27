import { Card, Button, ListGroup, Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Linkedin, X, Search } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";

function JobsMain() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }
  return (
    //offerte lavoro

    <Container>
      <Card className="mb-3 shadow-sm border-0 p-3 ">
        <Card.Title className="fw-bold fs-5">Le principali offerte di lavoro per te</Card.Title>
        <Card.Subtitle className="text-muted mb-3">
          In base al tuo profilo, alle tue preferenze e attività come candidature, ricerche e salvataggi
        </Card.Subtitle>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold" style={{ color: "#0B66C2" }}>
                Assistente front-office
              </h6>
              <X className="fs-3" />
            </div>
            <p className="text-muted mb-1">Etna People - Taormina, Sicilia, Italia (In sede)</p>
            <small className="text-muted">
              Promosso • <Linkedin style={{ marginBottom: "0.2rem", color: "#0B66C2" }} /> Candidatura semplice
            </small>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold" style={{ color: "#0B66C2" }}>
                SERVICE RECEPTIONIST
              </h6>
              <X className="fs-3" />
            </div>
            <p className="text-muted mb-1">Di Martino Group - Ragusa, Sicilia, Italia (In sede)</p>

            <small className="text-muted">
              Promosso • <Linkedin style={{ marginBottom: "0.2rem", color: "#0B66C2" }} /> Candidatura semplice
            </small>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold" style={{ color: "#0B66C2" }}>
                Receptionist
              </h6>
              <X className="fs-3" />
            </div>
            <p className="text-muted mb-1">HQ - Catania, Sicilia, Italia (In sede)</p>
            <small className="text-muted">1.200 €/mese - 1.400 €/mese</small>

            <small className="text-muted">
              Promosso • <Linkedin style={{ marginBottom: "0.2rem", color: "#0B66C2" }} /> Candidatura semplice
            </small>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="link" className="mt-2 text-decoration-none text-black">
          Mostra tutto <ArrowRight />
        </Button>
      </Card>

      {/* lasciati trova */}

      <Card className="mb-3 p-3">
        <div className="d-flex justify-content-between">
          <Card.Title className="fw-bold fs-5">Lasciati trovare dalle offerte di lavoro</Card.Title>
          <X className="fs-3" />
        </div>
        <Card.Text className="text-muted mb-0">
          Ricevi segnalazioni più rilevanti tenendo aggiornate le tue preferenze.
        </Card.Text>

        <Card.Body className="mt-0 d-flex align-items-center">
          <img
            className="rounded-pill img-fluid object-fit-cover"
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "60px",
              height: "60px",
              top: "-40px",
              left: "10px",
            }}
          />
          <div className="ms-2">
            <p className="mb-0 fw-semibold"> Disponibile a lavorare </p>
            <p className="mb-0 fw-normal small ">Ultimo aggiornamento: più di 3 mesi fa</p>
          </div>{" "}
        </Card.Body>

        <Button
          className="rounded-pill fw-semibold"
          size="sm"
          style={{ maxWidth: "12rem", backgroundColor: "#0B66C2" }}
        >
          Aggiorna le preferenze
        </Button>
      </Card>

      {/* ricerche lavoro */}

      <Card className="p-3">
        <Card.Title className="fw-bold fs-5">Ricerche di offerte di lavoro suggerite</Card.Title>
        <Row className="g-2">
          {[
            "English Second Language Tutor",
            "English Tutor",
            "English Specialist",
            "Reading Tutor",
            "Language Tutor",
            "English Language Instructor",
          ].map((job, index) => (
            <Col key={index} xs={12} sm={6} md={6}>
              <Button variant="outline-primary" size="sm" className="rounded-pill d-flex align-items-center ">
                <Search className="me-1" /> {job}
              </Button>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
}

export default JobsMain;
