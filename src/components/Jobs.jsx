import { Col, Container, Row } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import JobsMain from "./JobsMain";
import Card3Jobs from "./Card3Jobs";

const Jobs = () => {
  return (
    <Container fluid className="mt-4 p-4 jobs-container">
      <Row className="g-4">
        <Col xs={12} lg={3} className="left-content d-none d-lg-block">
          <HomeProfile />
          <Card3Jobs />
        </Col>

        <Col xs={12} lg={9} className="right-content">
          <JobsMain />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
