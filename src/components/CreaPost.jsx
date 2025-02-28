import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchProfile } from "../redux/actions/profileActions";
import { Calendar2Event, Image, ListColumnsReverse, Camera } from "react-bootstrap-icons";

function CreaPost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);

  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handleCreatePost = () => {
    if (postText.trim()) {
      const newPost = {
        text: postText,
        user: { username: profile.username, image: profile.image },
        likes: 0,
        shares: 0,
      };
      dispatch(createPost(newPost, imageFile));
      setPostText("");
      setImageFile(null);
      setImagePreview(null);
      setShowModal(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Container>
        <Card style={{ position: "relative" }}>
          <Card.Body>
            <img
              className="rounded-pill img-fluid object-fit-cover"
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{ width: "50px", height: "50px", border: "4px solid white" }}
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
          <Card.Body>
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

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="rounded-pill img-fluid object-fit-cover"
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{ width: "50px", height: "50px", border: "4px solid white", marginRight: "10px" }}
            />
            <h5>
              {profile.name} {profile.surname}
            </h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postText">
              <Form.Label>Scrivi il tuo post:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={postText}
                onChange={handlePostChange}
                placeholder="Cosa hai in mente?"
              />
              {imagePreview && (
                <div style={{ marginTop: "10px" }}>
                  <img src={imagePreview} alt="Preview" style={{ maxWidth: "100%" }} />
                </div>
              )}
            </Form.Group>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => document.getElementById("imageInput").click()}>
            <Camera style={{ marginRight: "5px" }} /> Aggiungi Immagine
          </Button>
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
