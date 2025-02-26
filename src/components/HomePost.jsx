import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";
import { ArrowRepeat, ChatText, HandThumbsUp, HandThumbsUpFill, HeartFill, LightbulbFill, SendFill } from "react-bootstrap-icons";

function HomePost() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Container className="mt-3">
        <Card>
          <Card.Body className=" d-flex ">
            <img
              className=" img-fluid object-fit-cover"
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",

                border: "4px solid white",
              }}
            />
            <h5 className="ms-3">Adobe Creative Cloud</h5>
          </Card.Body>
          <Card.Body>
            <p>
              Every frame tells a story. 🎥✨ A galactic dream, captured with vision and enhanced with creativity. hashtag#MadeWithCC hashtag#VisualJourney
              hashtag#CinematicVibes hashtag#StoryInMotion 🎨: Charles Lopez (IG @vagabondiary) CC App: hashtag#PremierePro hashtag#AfterEffects
              hashtag#Photoshop
            </p>
            <Button className="me-2 mt-2 mb-0 button-style ">Mostra traduzione</Button>
            <img src="https://i.ytimg.com/vi/19T_szBhCCg/maxresdefault.jpg" className="w-100 img-fluid object-fit-cover" />
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">
            <p>
              <HandThumbsUpFill style={{ color: "blue", marginRight: "5px" }} />
              <HeartFill style={{ color: "red", marginRight: "5px" }} />
              <LightbulbFill style={{ color: "orange", marginRight: "5px" }} /> 500
            </p>
            <p>2 diffusioni post</p>
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
          <Card.Body className="">
            <Button className="me-2  mb-0 button-style ">
              <HandThumbsUp style={{ color: "black", marginRight: "5px" }} /> Consiglia
            </Button>
            <Button className="me-2  mb-0 button-style ">
              <ChatText style={{ color: "black", marginRight: "5px" }} /> commenta
            </Button>
            <Button className="me-2  mb-0 button-style ">
              <ArrowRepeat style={{ color: "black", marginRight: "5px" }} /> Diffondi il post
            </Button>
            <Button className="me-2  mb-0 button-style ">
              <SendFill style={{ color: "black", marginRight: "5px" }} /> Invia
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomePost;
