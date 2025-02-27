import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchProfile } from "../redux/actions/profileActions";
import { Calendar2Event, Image, ListColumnsReverse } from "react-bootstrap-icons";

function CreaPost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);

  const [showModal, setShowModal] = useState(false); // Stato per aprire il modale
  const [postText, setPostText] = useState("");

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  const handlePostChange = (e) => {
    setPostText(e.target.value); // Aggiorna il testo del post mentre l'utente scrive
  };

  const handleCreatePost = () => {
    if (postText.trim()) {
      // Crea il post (simula l'invio al server)
      const newPost = {
        text: postText,
        user: { username: profile.username, image: profile.image },
        likes: 0,
        shares: 0,
      };
      dispatch(createPost(newPost)); // Aggiungi l'azione per creare il post
      setPostText(""); // Resetta il campo di testo
      setShowModal(false); // Chiudi il modale
    }
  };

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Container>
        <Card style={{ position: "relative" }}>
          <Card.Body className="">
            <img
              className="rounded-pill img-fluid object-fit-cover"
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",

                border: "4px solid white",
              }}
            />
            <Button
              className="text-muted fw-bold"
              style={{
                width: "80%",
                backgroundColor: "white",
                borderRadius: "50px",
                textAlign: "left",
                padding: "10px 20px",
                border: "1px solid #ccc",
              }}
              onClick={() => setShowModal(true)}
            >
              Crea un post
            </Button>
          </Card.Body>
          <Card.Body className=" ">
            <Button className="me-2 mt-2 mb-0 button-style ">
              <Image style={{ color: "blue", marginRight: "5px" }} /> Contenuti Multimediali
            </Button>
            <Button className="me-2 mt-2 mb-0 button-style ">
              <Calendar2Event style={{ color: "rgb(184, 134, 11)", marginRight: "5px" }} /> Evento
            </Button>
            <Button className="me-2 mt-2 mb-0 button-style ">
              <ListColumnsReverse style={{ color: "orange", marginRight: "5px" }} /> Scrivi un articolo
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un Nuovo Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postText">
              <Form.Label>Scrivi il tuo post:</Form.Label>
              <Form.Control as="textarea" rows={3} value={postText} onChange={handlePostChange} placeholder="Cosa hai in mente?" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleCreatePost}>
            Crea Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreaPost;
