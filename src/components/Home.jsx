import { Col, Container, Row } from "react-bootstrap";

import HomeProfile from "./HomeProfile";
import MiniCardHome from "./MiniCardHome";
import CreaPost from "./CreaPost";
import HomePost from "./HomePost";
import AsideCard from "./AsideHome";

const Home = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="col-3">
            <HomeProfile />
            <MiniCardHome />
          </Col>
          <Col className="col-6">
            <CreaPost />
            <HomePost />
          </Col>
          <Col className="col-3">
            <AsideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
