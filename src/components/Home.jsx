import { Col, Container, Row } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import MiniCardHome from "./MiniCardHome";
import CreaPost from "./CreaPost";
import HomePost from "./HomePost";
import AsideCard from "./AsideHome";

const Home = () => {
  return (
    <Container className="mt-4">
      <Row className="g-3">
        <Col lg={3} md={4} className="d-none d-md-block">
          <HomeProfile />
          <MiniCardHome />
        </Col>

        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <CreaPost />
          <HomePost />
        </Col>

        <Col lg={3} className="d-none d-lg-block">
          <AsideCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
