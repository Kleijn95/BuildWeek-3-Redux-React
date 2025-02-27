import { Card } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Card1() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Link className="custom-link d-flex justify-content-between">
          <div>
            <h6 className="d-flex justify-content-between  mb-0">Collegamenti</h6>
            <p className="mb-0 text-secondary ">Espandi la tua rete</p>
          </div>
          <PersonPlusFill />
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Card1;
