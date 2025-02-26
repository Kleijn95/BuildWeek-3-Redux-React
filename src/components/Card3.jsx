import { Card } from "react-bootstrap";
import { BookmarkFill, Calendar3Event, PeopleFill, Postcard } from "react-bootstrap-icons";

function Card3() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <h6 className="d-flex align-items-center mb-3">
          <BookmarkFill style={{ color: "black", marginRight: "5px" }} /> Elementi salvati
        </h6>
        <h6 className="d-flex align-items-center mb-3">
          <PeopleFill style={{ color: "black", marginRight: "5px" }} /> Gruppi
        </h6>
        <h6 className="d-flex align-items-center mb-3">
          <Postcard style={{ color: "black", marginRight: "5px" }} /> Newsletter
        </h6>
        <h6 className="d-flex align-items-center mb-3">
          <Calendar3Event style={{ color: "black", marginRight: "5px" }} /> Eventi
        </h6>
      </Card.Body>
    </Card>
  );
}

export default Card3;
