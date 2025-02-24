import { useEffect, useState } from "react";
import { Button, Card, CardLink, Modal } from "react-bootstrap";
import { PatchCheck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import Bio from "./Bio";

function MainProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Card style={{ position: "relative" }}>
        <Card.Body
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
          <Card.Title className="d-flex justify-content-between mt-5 pt-4">
            <p>
              {profile.name} {profile.surname} <PatchCheck />
            </p>
            <p>I.I.S. Concetto Marchesi - Mascalucia (CT)</p>
          </Card.Title>
          <Card.Text>{profile.title}</Card.Text>
          <Card.Text>
            {profile.area} + <CardLink onClick={() => setShowModal(true)}>Informazioni di Contatto</CardLink>
          </Card.Text>
          <Button variant="primary" className="me-2 rounded-pill">
            Disponibile per
          </Button>
          <Button variant="primary" className="me-2 rounded-pill">
            Aggiorna sezione del Profilo
          </Button>
          <Button variant="primary" className="me-2 rounded-pill">
            Migliora Profilo
          </Button>
          <Button variant="primary" className="me-2 rounded-pill">
            Risorse
          </Button>
          <Card.Body style={{ backgroundColor: "#DDE7F1" }} className=" rounded-3 mt-3">
            <Card.Text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea amet inventore ullam impedit vero
                alias aliquid autem. Dolor corrupti temporibus modi? Aut dignissimos molestias incidunt ullam delectus
                quos quia?
              </p>
              <Card.Text>
                <CardLink>Mostra Dettagli</CardLink>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
      <Bio />
      {/* MODALE */}
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

export default MainProfile;
