import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions/profileActions";
import {
  ArrowDownCircle,
  // ArrowRepeat,
  ArrowUpCircle,
  // ChatText,
  // GlobeEuropeAfrica,
  // HandThumbsUp,
  // HandThumbsUpFill,
  // HeartFill,
  // LightbulbFill,
  // PencilSquare,
  // SendFill,
  // ThreeDots,
  // Trash3,
} from "react-bootstrap-icons";
import SinglePost from "./SinglePost";

function HomePost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const posts = useSelector((state) => state.post.content);

  const [visiblePosts, setVisiblePosts] = useState(3);
  // const [showEditModal, setShowEditModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [currentPost, setCurrentPost] = useState(null);
  // const [comment, setComment] = useState(false)

  useEffect(() => {
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

  const togglePosts = () => {
    setVisiblePosts(visiblePosts === 3 ? posts.length : 3);
  };

  // const handleEditPost = () => {
  //   if (currentPost && currentPost.text.trim()) {
  //     dispatch(updatePost(currentPost._id, currentPost.text, currentPost.image));
  //     setShowEditModal(false);
  //   }
  // };

  // const handleDeletePost = () => {
  //   if (currentPost) {
  //     dispatch(deletePost(currentPost._id));
  //     setShowDeleteModal(false);
  //   }
  // };

  return (
    <>
      <Container className="mt-3">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <SinglePost key={index} post={post} profile={profile} />
        ))}
        <Button onClick={togglePosts} className="mt-3 btn-light text-muted">
          {visiblePosts === 3 ? <ArrowDownCircle size={24} /> : <ArrowUpCircle size={24} />}
          {visiblePosts === 3 ? "Mostra altri post" : "Mostra meno"}
        </Button>
      </Container>

      {/* <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
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
          <Button variant="primary" onClick={handleEditPost}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

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
      </Modal> */}
    </>
  );
}

export default HomePost;
