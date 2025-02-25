import { Card } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function Bio() {
  const profile = useSelector((state) => state.myprofile.data);
  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <p>Informazioni</p>
          <PencilSquare />
        </Card.Title>
        <p>{profile.bio}</p>
      </Card.Body>
    </Card>
  );
}

export default Bio;
