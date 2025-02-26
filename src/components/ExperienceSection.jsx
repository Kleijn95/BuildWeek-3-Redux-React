import { Col, Container, Row } from "react-bootstrap";

import AsideProfile from "./AsideProfile";

import ExperienceEditSection from "./ExperienceEditSection";

function ExperienceSection() {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col className="col-8">
            <ExperienceEditSection />
          </Col>
          <Col className="col-3">
            <AsideProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ExperienceSection;
