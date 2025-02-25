import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import Experience from "./Experience";

function MainSection() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-9">
            <MainProfile />
            <Experience />
          </Col>
          <Col className="col-3">
            <AsideProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainSection;
