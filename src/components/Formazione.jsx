import { Card } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function Formazione() {
  const educationData = useSelector((state) => state.education);
  const formazione = educationData?.formazione || [];
  const randomSchool = formazione.length > 0 ? formazione[Math.floor(Math.random() * formazione.length)] : null;

  return (
    <Card className="mt-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title className="mb-0">Formazione</Card.Title>
          <div>
            <Plus className="fs-2 mx-2" />
            <PencilSquare className="me-2 fs-5 mx-2" />
          </div>
        </div>

        {randomSchool && (
          <div className="d-flex align-items-center mt-3">
            <img
              src={randomSchool.logo}
              alt="Scuola Logo"
              className="me-3"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div>
              <p className="mb-1 fw-bold">{randomSchool.scuola}</p>
              <p className="mb-1">{randomSchool.indirizzo}</p>
              <p className="mb-0">
                {randomSchool.start_date} - {randomSchool.end_date}
              </p>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Formazione;
