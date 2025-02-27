import { useEffect, useState } from "react";
import { Button, Card, Container, Dropdown, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, updatePost, deletePost } from "../redux/actions/profileActions";
import {
  ArrowDownCircle,
  ArrowRepeat,
  ArrowUpCircle,
  ChatText,
  HandThumbsUp,
  HandThumbsUpFill,
  HeartFill,
  LightbulbFill,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";

function HomePost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const posts = useSelector((state) => state.post.content);

  const [visiblePosts, setVisiblePosts] = useState(3); // Stato per gestire il numero di post visibili
  const [showEditModal, setShowEditModal] = useState(false); // Stato per il modale di modifica
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Stato per il modale di cancellazione
  const [currentPost, setCurrentPost] = useState(null); // Stato per il post che si sta modificando

  useEffect(() => {
    // Carica i post solo una volta (se necessario)
    if (!posts || posts.length === 0) {
      dispatch(fetchPost("//striveschool-api.herokuapp.com/api/posts/"));
    }
  }, [dispatch, posts]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }
  if (!posts || posts.length === 0) {
    return <p>Nessun post disponibile.</p>;
  }

  // Funzione per gestire il toggle di visibilità dei post
  const togglePosts = () => {
    setVisiblePosts(visiblePosts === 3 ? posts.length : 3);
  };

  // Funzione per gestire la modifica del post
  const handleEditPost = () => {
    if (currentPost && currentPost.text.trim()) {
      dispatch(updatePost(currentPost._id, currentPost.text, currentPost.image)); // Invio della richiesta di aggiornamento post
      setShowEditModal(false); // Chiudi il modale dopo la modifica
    }
  };

  // Funzione per la cancellazione del post
  const handleDeletePost = () => {
    if (currentPost) {
      dispatch(deletePost(currentPost._id)); // Invia la richiesta di cancellazione
      setShowDeleteModal(false); // Chiudi il modale di conferma
    }
  };

  return (
    <>
      <Container className="mt-3">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <Card key={index} className="mb-4">
            <Card.Body className="d-flex">
              <img
                className="img-fluid object-fit-cover"
                src={post.user.image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                alt="Profile"
                style={{
                  width: "50px",
                  height: "50px",
                  border: "4px solid white",
                  borderRadius: "50%",
                }}
              />
              <h5 className="ms-3">{post.username}</h5>

              {/* Aggiungi i 3 puntini per i post dell'utente */}
              {post.username === profile.username && (
                <Dropdown className="ms-auto">
                  <Dropdown.Toggle variant="link" id="dropdown-custom-components">
                    <ThreeDots />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setCurrentPost(post);
                        setShowEditModal(true);
                      }}
                    >
                      Modifica
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setCurrentPost(post);
                        setShowDeleteModal(true);
                      }}
                    >
                      Cancella
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Card.Body>

            <Card.Body>
              <p>{post.text}</p>
              {post.image && <img src={post.image} className="w-100 img-fluid object-fit-cover" alt="Post" />}
            </Card.Body>

            <Card.Body className="d-flex justify-content-between">
              <p>
                <HandThumbsUpFill style={{ color: "blue", marginRight: "5px" }} />
                <HeartFill style={{ color: "red", marginRight: "5px" }} />
                <LightbulbFill style={{ color: "orange", marginRight: "5px" }} /> {post.likes}
              </p>
              <p>{post.shares} diffusioni post</p>
            </Card.Body>

            <hr
              style={{
                width: "80%",
                border: "1px solid #ccc",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />

            <Card.Body>
              <Button className="me-2 mb-0 button-style">
                <HandThumbsUp style={{ color: "black", marginRight: "5px" }} /> Consiglia
              </Button>
              <Button className="me-2 mb-0 button-style">
                <ChatText style={{ color: "black", marginRight: "5px" }} /> commenta
              </Button>
              <Button className="me-2 mb-0 button-style">
                <ArrowRepeat style={{ color: "black", marginRight: "5px" }} /> Diffondi il post
              </Button>
              <Button className="me-2 mb-0 button-style">
                <SendFill style={{ color: "black", marginRight: "5px" }} /> Invia
              </Button>
            </Card.Body>
          </Card>
        ))}

        <Button onClick={togglePosts} className="mt-3 btn-light text-muted">
          {visiblePosts === 3 ? <ArrowDownCircle size={24} /> : <ArrowUpCircle size={24} />}
          {visiblePosts === 3 ? "Mostra altri post" : "Mostra meno"}
        </Button>
      </Container>

      {/* Modal per modificare il post */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <h5>Modifica Post</h5>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postText">
              <Form.Label>Testo del post:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={currentPost?.text || ""}
                onChange={(e) => setCurrentPost({ ...currentPost, text: e.target.value })}
                placeholder="Cosa vuoi scrivere?"
              />
              {currentPost?.image && (
                <div style={{ marginTop: "10px" }}>
                  <img src={currentPost.image} alt="Preview" style={{ maxWidth: "100%" }} />
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleEditPost}>
            Salva Modifiche
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal di conferma per la cancellazione */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} size="sm">
        <Modal.Header closeButton>
          <h5>Conferma Cancellazione</h5>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler cancellare questo post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDeletePost}>
            Cancella
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomePost;
