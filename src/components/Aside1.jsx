import { Card } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";

function Aside1() {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <p>Lingua Profilo</p>
          <PencilSquare />
        </Card.Title>
        <p className="text-secondary">Italiano</p>
        <hr style={{ borderColor: "lightgray" }} />
        <Card.Title className="d-flex justify-content-between">
          <p>Profilo pubblico e URL</p>
          <PencilSquare />
        </Card.Title>
        <p className="text-secondary">www.linkedin.com/in/antonio-kleijn-hesselink-8247882b7</p>
      </Card.Body>
    </Card>
  );
}

export default Aside1;
