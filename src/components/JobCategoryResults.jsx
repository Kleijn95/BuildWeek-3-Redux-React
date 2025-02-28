import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Row, Col, Spinner, Alert, Container, Modal, Button } from "react-bootstrap";
import { useState } from "react";

function JobCategoryResults() {
  const { type } = useParams();
  const { jobs, loading, error } = useSelector((state) => state.jobsByCategory);
  const jobList = jobs.data || [];

  const [showModal, setShowModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleShowDescription = (description) => {
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h2>Offerte di lavoro per {type}</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert variant="danger">Errore: {error}</Alert>}

      {jobList.length > 0 ? (
        <Row>
          {jobList.map((job, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                  <Card.Text>
                    <strong>Location:</strong> {job.candidate_required_location}
                  </Card.Text>
                  {job.description && (
                    <Button variant="link" onClick={() => handleShowDescription(job.description)}>
                      Visualizza descrizione
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Nessun lavoro trovato.</p>
      )}

      {/* Modal per la descrizione */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Descrizione del lavoro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div dangerouslySetInnerHTML={{ __html: selectedDescription }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default JobCategoryResults;
