import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import Experience from "./Experience";
import Formazione from "./Formazione";

function MainSection() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-9">
            <MainProfile />
            <Experience />
            <Formazione />
            {/* <Competenze /> */}
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
