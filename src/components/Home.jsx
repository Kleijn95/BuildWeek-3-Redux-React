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
          <Col xs={12} sm={3} className="d-none d-sm-block d-md-block">
            <HomeProfile />
            <MiniCardHome />
          </Col>

          <Col xs={10} sm={9} md={6} className="mx-auto">
            <CreaPost />
            <HomePost />
          </Col>

          <Col xs={12} sm={3} className="d-none d-md-block">
            <AsideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
