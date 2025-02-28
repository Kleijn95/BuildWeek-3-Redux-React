import { Col, Container, Row } from "react-bootstrap";
import AsideProfile from "./AsideProfile";
import ExperienceEditSection from "./ExperienceEditSection";

function ExperienceSection() {
  return (
    <Container fluid className="mt-5 p-4 experience-section-container">
      <Row className="g-4">
        <Col xs={12} lg={8} className="main-content">
          <ExperienceEditSection />
        </Col>

        <Col xs={12} lg={4} className="d-none d-lg-block aside-content">
          <AsideProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceSection;
