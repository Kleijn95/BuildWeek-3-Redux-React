import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import Experience from "./Experience";
import Formazione from "./Formazione";
import Competenze from "./Competenze";

function MainSection() {
  return (
    <Container fluid className="mt-5 p-4 main-section-container">
      <Row className="g-4">
        <Col xs={12} lg={9} className="main-content">
          <MainProfile />
          <div className="mt-4">
            <Experience />
          </div>
          <div className="mt-4">
            <Formazione />
          </div>
          <div className="mt-4">
            <Competenze />
          </div>
        </Col>

        <Col xs={12} lg={3} className="d-none d-lg-block aside-content">
          <AsideProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default MainSection;
