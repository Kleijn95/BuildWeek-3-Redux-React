import { useEffect, useState } from "react";
import { Button, Modal, Form, Container, FormGroup, FormLabel, FormControl, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PencilSquare } from "react-bootstrap-icons";
import { putProfile, fetchProfile } from "../redux/actions/profileActions";

function Bio() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data); // Ottieni il profilo dallo store
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState(profile?.bio || ""); // Stato per gestire la bio modificata

  // Usa useEffect per aggiornare lo stato locale quando il profilo cambia
  useEffect(() => {
    if (profile) {
      setBio(profile.bio); // Quando il profilo viene aggiornato nel Redux store, aggiorna la bio
    }
  }, [profile]); // Si attiva ogni volta che `profile` cambia

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invia la nuova bio al backend e aggiorna il Redux store
    const updatedProfile = { ...profile, bio };
    dispatch(putProfile(updatedProfile)) // Chiamata per aggiornare il profilo nel backend
      .then(() => {
        // Dopo aver aggiornato il profilo, ricarica i dati
        dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
        setShowModal(false); // Chiudi il modal
      })
      .catch((error) => console.error("Errore durante l'aggiornamento della bio:", error));
  };

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">Informazioni</p>
            <Button variant="outline-*" className="p-0 mx-2" onClick={() => setShowModal(true)}>
              <PencilSquare className="fs-2" />
            </Button>{" "}
          </Card.Title>
          <p>{profile.bio}</p>
        </Card.Body>
      </Card>

      {/* Modal per modificare la bio */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Bio</Modal.Title>
          </Modal.Header>
        </Container>
        <Modal.Body className="pb-0">
          <Form onSubmit={handleSubmit}>
            <Container className="mb-4">
              <FormGroup className="mt-2">
                <FormLabel>Bio</FormLabel>
                <FormControl
                  as="textarea"
                  value={bio}
                  onChange={handleBioChange}
                  placeholder="Aggiorna la tua bio"
                  required
                  rows={5}
                />
              </FormGroup>
            </Container>
            <div className="d-flex justify-content-end">
              <Button
                className="me-3 mb-3 rounded-5 px-3 py-1"
                type="submit"
                variant="primary"
                style={{ backgroundColor: "#0C66C2" }}
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Bio;
