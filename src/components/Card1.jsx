import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Card1() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Link className="custom-link">
          <h6 className="d-flex justify-content-between  mb-1">Collegamento</h6>
          <p className="mb-0 ">Espandi la tua rete</p>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Card1;
