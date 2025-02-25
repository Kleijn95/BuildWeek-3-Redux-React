import { Col, Container, Row } from "react-bootstrap";

import AsideProfile from "./AsideProfile";
import { useParams } from "react-router-dom";
import UtenteProfile from "./UtenteProfile";
import UtenteExperience from "./UtenteExperience";

function ProfileSection() {
  const { userId } = useParams();
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-9">
            <UtenteProfile userId={userId} />
            <UtenteExperience />
          </Col>
          <Col className="col-3">
            <AsideProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileSection;
