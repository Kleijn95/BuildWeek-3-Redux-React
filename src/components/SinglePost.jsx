import { useEffect, useState } from "react";
import { Button, Card, Dropdown, Form, Modal } from "react-bootstrap";
import {
  ArrowRepeat,
  ChatText,
  GlobeEuropeAfrica,
  HandThumbsUp,
  HandThumbsUpFill,
  HeartFill,
  LightbulbFill,
  PencilSquare,
  SendFill,
  ThreeDots,
  Trash3,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getComments, updatePost } from "../redux/actions/profileActions";
import SingleComment from "./SingleComment";

const SinglePost = (props) => {
  console.log("sono il props", props.post._id);
  const dispatch = useDispatch();
  const [currentPost, setCurrentPost] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const comments = useSelector((state) => state.comments.content) || [];
  const [comment, setComment] = useState(false);
  const [postComments, setPostComments] = useState([]);
  console.log("sono il comment", comments);

  const handleEditPost = () => {
    if (currentPost && currentPost.text.trim()) {
      dispatch(updatePost(currentPost._id, currentPost.text, currentPost.image));
      setShowEditModal(false);
    }
  };
  const handleDeletePost = () => {
    if (currentPost) {
      dispatch(deletePost(currentPost._id));
      setShowDeleteModal(false);
    }
  };

  useEffect(() => {
    setPostComments(comments.filter((comm) => comm.elementId === props.post._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  return (
    <>
      <Card className="mb-4">
        <Card.Body className="d-flex align-items-center">
          <img
            className="img-fluid object-fit-cover"
            src={props.post.user.image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
            alt="Profile"
            style={{
              width: "50px",
              height: "50px",
              border: "4px solid white",
              borderRadius: "50%",
            }}
          />
          <div>
            <h5 className=" mb-0">{props.post.username}</h5>
            <p className="text-secondary mb-0">{props.post.user.title}</p>
            <p className="mb-0 text-secondary">
              {new Date(props.post.createdAt).toLocaleString("it-IT", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}{" "}
              • <GlobeEuropeAfrica />
            </p>
          </div>

          {props.post.username === props.profile.username && (
            <Dropdown className="ms-auto">
              <Dropdown.Toggle variant="link" id="dropdown-custom-components" style={{ color: "gray", border: "none" }} className="p-0">
                <ThreeDots />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setCurrentPost(props.post);
                    setShowEditModal(true);
                  }}
                >
                  <PencilSquare /> Modifica
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setCurrentPost(props.post);
                    setShowDeleteModal(true);
                  }}
                >
                  <Trash3 /> Cancella
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Card.Body>

        <Card.Body>
          <p>{props.post.text}</p>
          {props.post.image && <img src={props.post.image} className="w-100 img-fluid object-fit-cover" alt="Post" />}
        </Card.Body>

        <Card.Body className="d-flex justify-content-between">
          <p>
            <HandThumbsUpFill style={{ color: "blue", marginRight: "5px" }} />
            <HeartFill style={{ color: "red", marginRight: "5px" }} />
            <LightbulbFill style={{ color: "orange", marginRight: "5px" }} /> {props.post.likes}
          </p>
          <p>{props.post.shares} diffusioni post</p>
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
          <Button className="me-2 mb-0 button-style" onClick={() => setComment(!comment)}>
            <ChatText style={{ color: "black", marginRight: "5px" }} /> commenta
          </Button>
          <Button className="me-2 mb-0 button-style">
            <ArrowRepeat style={{ color: "black", marginRight: "5px" }} /> Diffondi il post
          </Button>
          <Button className="me-2 mb-0 button-style">
            <SendFill style={{ color: "black", marginRight: "5px" }} /> Invia
          </Button>
        </Card.Body>
        <Card.Body>
          {comment && (
            <Card.Body>
              <SingleComment comments={postComments} post={props.post} />
            </Card.Body>
          )}
        </Card.Body>
      </Card>

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
      </Modal>
    </>
  );
};

export default SinglePost;
