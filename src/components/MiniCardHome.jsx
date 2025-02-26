import { Col, Container, Row } from "react-bootstrap";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function MiniCardHome() {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-12">
            <Card1 />
          </Col>
          <Col className="col-12">
            <Card2 />
          </Col>
          <Col className="col-12">
            <Card3 />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MiniCardHome;
