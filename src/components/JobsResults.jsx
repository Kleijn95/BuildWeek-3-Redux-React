/* eslint-disable react/prop-types */
import { Card, ListGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { Linkedin } from "react-bootstrap-icons";

function JobsResults({ jobs, onJobSelect }) {
  console.log("Jobs passed to JobsResults:", jobs);

  const [visibleJobs, setVisibleJobs] = useState(5);

  const toggleJobs = () => {
    setVisibleJobs((prev) => (prev === jobs.length ? 5 : Math.min(prev + 5, jobs.length)));
  };

  const handleJobClick = (job) => {
    onJobSelect(job);
  };

  if (!Array.isArray(jobs)) {
    return <p>Nessun risultato trovato.</p>;
  }

  return (
    <Card className="mt-2">
      <Card.Body>
        <h5 className="display-6 mb-5">Risultati della ricerca :</h5>
        <ListGroup variant="flush">
          {jobs.slice(0, visibleJobs).map((job, index) => (
            <ListGroup.Item key={index} onClick={() => handleJobClick(job)} style={{ cursor: "pointer" }}>
              <h6 className="text-primary fs-5">{job.category}</h6>
              <p>{job.company_name}</p>
              <p>{job.candidate_required_location}</p>
              <p>
                •
                <Linkedin style={{ marginBottom: "0.2rem", color: "#0B66C2" }} /> Candidatura semplice
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="mt-3">
          <Button variant="light" className="text-dark" onClick={toggleJobs}>
            {visibleJobs === jobs.length ? "Mostra meno" : "Mostra altri lavori"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobsResults;
