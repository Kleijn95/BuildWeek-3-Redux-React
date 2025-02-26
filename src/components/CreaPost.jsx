import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";

function CreaPost() {
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
            >
              Crea un post
            </Button>
          </Card.Body>
          <Card.Body className=" ">
            <Button className="me-2 mt-2 mb-0 button-style ">Contenuti Multimediali</Button>
            <Button className="me-2 mt-2 mb-0 button-style ">Evento</Button>
            <Button className="me-2 mt-2 mb-0 button-style ">Scrivi un articolo</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default CreaPost;
