import { Col, Container, Row } from "react-bootstrap";

import AsideProfile from "./AsideProfile";
import { useParams } from "react-router-dom";
import UtenteProfile from "./UtenteProfile";
import UtenteExperience from "./UtenteExperience";
import Formazione from "./Formazione";
import Competenze from "./Competenze";

function ProfileSection() {
  const { userId } = useParams();
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="col-9">
            <UtenteProfile userId={userId} />
            <UtenteExperience />
            <Formazione />
            <Competenze />
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
