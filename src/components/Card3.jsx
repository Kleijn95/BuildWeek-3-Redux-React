import { Card } from "react-bootstrap";

function Card3() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <h6 className="d-flex justify-content-between mb-3 ">Elementi salvati</h6>
        <h6 className="d-flex justify-content-between mb-3 ">Gruppi</h6>
        <h6 className="d-flex justify-content-between mb-3 ">Newsletter</h6>
        <h6 className="d-flex justify-content-between mb-3 ">Eventi</h6>
      </Card.Body>
    </Card>
  );
}

export default Card3;
