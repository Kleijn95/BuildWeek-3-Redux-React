/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Card, CardLink, Modal } from "react-bootstrap";
import { PatchCheck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUtente } from "../redux/actions/profileActions";
import BioUtente from "./BioUtente";

function UtenteProfile({ userId }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.utente.data);
  const [showModal, setShowModal] = useState(false);
  const competenzeData = useSelector((state) => state.education.jobs) || [];

  console.log(userId);

  useEffect(() => {
    dispatch(fetchUtente("https://striveschool-api.herokuapp.com/api/profile/" + userId));
  }, [dispatch, userId]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  const getRandomJobs = (data) => {
    const randomCount = Math.floor(Math.random() * data.length) + 1;
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  const randomJobs = getRandomJobs(competenzeData);

  return (
    <>
      <Card style={{ position: "relative" }}>
        <Card.Body
          style={{
            backgroundImage: 'url("https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
          }}
        ></Card.Body>

        <Card.Body className="mt-4" style={{ position: "relative", zIndex: 1 }}>
          <img
            className="rounded-pill img-fluid object-fit-cover"
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              top: "-75px",
              left: "20px",
              border: "4px solid white",
            }}
          />
          <Card.Title className="d-flex justify-content-between mt-5 pt-4 mb-0">
            <p className="mb-0 fs-4">
              {profile.name} {profile.surname} <PatchCheck />
            </p>
            <p className="me-5 mb-0 fs-5">Epicode</p>
          </Card.Title>
          <Card.Text className="mb-0">{profile.title}</Card.Text>
          <Card.Text className="text-secondary ">
            {profile.area} +{" "}
            <CardLink className="text-decoration-none" onClick={() => setShowModal(true)}>
              <span className=" fw-semibold">Informazioni di Contatto</span>
            </CardLink>
          </Card.Text>
          <Button variant="primary" className="me-2 rounded-pill fw-semibold">
            Disponibile per
          </Button>
          <Button variant="outline-primary" className="me-2 rounded-pill fw-semibold btnchiaro">
            Aggiungi sezione del Profilo
          </Button>
          <Button variant="outline-primary" className="me-2 rounded-pill fw-semibold btnchiaro">
            Migliora Profilo
          </Button>
          <Button variant="outline-secondary" className="me-2 rounded-pill fw-semibold btnscuro text-secondary">
            Risorse
          </Button>
          <Card.Body style={{ backgroundColor: "#DDE7F1" }} className=" rounded-3 mt-3">
            <Card.Text>
              <p className="mb-0 fw-semibold">Disponibile a lavorare</p>
              <p className="mb-0">Ruoli di {randomJobs.map((job) => job.lavoro).join(", ")}</p>
              <Card.Text>
                <CardLink className="text-decoration-none fw-semibold">Mostra Dettagli</CardLink>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
      <BioUtente />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {profile.name} {profile.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5">Informazioni di Contatto</p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Telefono:</strong> 3458914809
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/antonio-kleijn-hesselink-8247882b7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Vai al profilo{" "}
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UtenteProfile;
