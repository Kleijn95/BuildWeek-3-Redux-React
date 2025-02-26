import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/profileActions";

function HomeProfile() {
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
          <Card.Body
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100px",
              width: "auto",
            }}
          ></Card.Body>

          <Card.Body className="mt-4" style={{ position: "relative", zIndex: 1 }}>
            <img
              className="rounded-pill img-fluid object-fit-cover"
              src={profile.image || "https://via.placeholder.com/150"}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                top: "-75px",
                left: "20px",
                border: "4px solid white",
              }}
            />
            <Card.Title className="d-flex justify-content-between pt-4 ">
              {profile.name} {profile.surname}
            </Card.Title>

            <Card.Text>
              <p>I.I.S. Concetto Marchesi - Mascalucia (CT)</p>
            </Card.Text>
            <Card.Text>{profile.title}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomeProfile;
