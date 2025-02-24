import { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAside } from "../redux/actions/profileActions";

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
    <Container className="bg-white ">
      <Row>
        {aside.map((element) => (
          <Col key={element._id} className="mb-3 d-flex">
            <div>
              <Image className="w-50" fluid variant="top" src={element.image} />
            </div>
            <div>
              <h4>{element.title}</h4>
              <p>{element.name}</p>
              <p>{element.surname}</p>
              <Button variant="primary">Go somewhere</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Aside2;
