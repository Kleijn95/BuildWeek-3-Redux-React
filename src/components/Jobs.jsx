import { Col, Container, Row } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import JobsMain from "./JobsMain";
import Card3Jobs from "./Card3Jobs";

const Jobs = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="col-3">
            <HomeProfile />
            <Card3Jobs />
          </Col>
          <Col className="col-9">
            <JobsMain />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
