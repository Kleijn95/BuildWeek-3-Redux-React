/* eslint-disable react/prop-types */
import { Card, ListGroup } from "react-bootstrap";

function JobsResults({ jobs }) {
  console.log("Jobs passed to JobsResults:", jobs); // Verifica se i dati sono corretti

  if (!Array.isArray(jobs)) {
    return <p>Nessun risultato trovato.</p>; // Gestisci il caso in cui jobs non è un array
  }

  return (
    <Card className="mt-2">
      <Card.Body>
        <h5>Risultati della ricerca</h5>
        <ListGroup variant="flush">
          {jobs.length === 0 ? (
            <p>Nessun lavoro trovato.</p>
          ) : (
            jobs.map((job, index) => (
              <ListGroup.Item key={index}>
                <h6>{job.title}</h6>
                <p>{job.company_name}</p>
                <p>{job.location}</p>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default JobsResults;
