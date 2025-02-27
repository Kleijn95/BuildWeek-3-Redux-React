import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions/profileActions";
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
} from "react-bootstrap-icons";

function HomePost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const posts = useSelector((state) => state.post.content);

  const [visiblePosts, setVisiblePosts] = useState(3); // Stato per gestire il numero di post visibili

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

  return (
    <>
      <Container className="mt-3">
        {posts
          .slice(0, visiblePosts)

          .map((post, index) => (
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
              </Card.Body>

              <Card.Body>
                <p>{post.text}</p>
                <Button className="me-2 mt-2 mb-0 button-style">Mostra traduzione</Button>
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

        {/* Aggiungi il bottone per alternare la visibilità dei post */}
        <Button onClick={togglePosts} className="mt-3 btn-light text-muted">
          {visiblePosts === 3 ? <ArrowDownCircle size={24} /> : <ArrowUpCircle size={24} />}
          {visiblePosts === 3 ? "Mostra altri post" : "Mostra meno"}
        </Button>
      </Container>
    </>
  );
}

export default HomePost;
