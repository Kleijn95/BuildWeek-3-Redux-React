/* eslint-disable no-undef */
import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAside } from "../redux/actions/profileActions";
import { PersonPlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Aside2() {
  const dispatch = useDispatch();

  const aside = useSelector((state) => state.aside.data);
  console.log(aside);

  useEffect(() => {
    dispatch(fetchAside("https://striveschool-api.herokuapp.com/api/profile/"));
  }, [dispatch]);

  if (!aside) {
    return <p>Caricamento...</p>;
  }

  return (
    <Container className="bg-white">
      <h4 className="pt-3 mb-4 ms-auto fs-5">Persone che potresti conoscere</h4>
      {aside.map((element) => (
        <div key={element._id}>
          <Row className="mb-3 d-flex align-items-start ms-auto">
            {" "}
            <Col xs={3} className="me-3">
              <Link to={`/${element._id}`}>
                <Image className="w-100 rounded-circle" fluid variant="top" src={element.image} style={{ objectFit: "cover", aspectRatio: "1/1" }} />
              </Link>
            </Col>
            <Col>
              <div>
                <strong>{element.name}</strong> <strong>{element.surname}</strong>
              </div>
              <p>{element.title}</p>
              <Button className="rounded-pill bg-white border-black border text-black asideButton">
                <PersonPlus /> Collegati
              </Button>
            </Col>
          </Row>
          <hr style={{ borderColor: "lightgray" }} />
        </div>
      ))}
    </Container>
  );
}

export default Aside2;
