/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

function JobDetail({ job }) {
  if (!job) {
    return null; // Se non c'è nessun lavoro selezionato, non mostra nulla
  }

  return (
    <>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>
            <strong>Company:</strong> {job.company_name}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {job.location}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {job.description || "No description available"}
          </Card.Text>
          <Card.Text>
            <strong>Post Date:</strong> {job.post_date}
          </Card.Text>
        </Card.Body>

        <Card.Body className="mt-4">
          <Button variant="primary" className="me-2 rounded-pill fw-semibold">
            Disponibile per
          </Button>

          <Button variant="outline-primary" className="me-2 rounded-pill fw-semibold btnchiaro">
            Migliora Profilo
          </Button>
          <Button variant="outline-secondary" className="me-2 rounded-pill fw-semibold btnscuro text-secondary">
            Risorse
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default JobDetail;
