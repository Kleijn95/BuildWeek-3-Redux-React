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
              backgroundImage: 'url("https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq")',
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

            <Card.Text className="mb-0">
              <p className="mb-0">Epicode</p>
              <p className="mb-0 text-secondary">{profile.area}</p>
            </Card.Text>
            <Card.Text className="fw-medium mt-1 lh-1">{profile.title}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomeProfile;
