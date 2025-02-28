import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import JobsResults from "./JobsResults";
import JobDetail from "./JobDetail";
import { useState } from "react";

const SearchJobsResults = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobSearch);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobSelect = (job) => {
    setSelectedJob(job); // Quando un lavoro viene cliccato, aggiorna lo stato con il lavoro selezionato
  };

  console.log("Jobs in SearchJobsResults:", jobs); // Verifica i dati prima di passarli

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col className="col-5 mt-5">
          <JobsResults jobs={jobs} onJobSelect={handleJobSelect} />
        </Col>
        <Col className="col-5 mt-5">
          <JobDetail job={selectedJob} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobsResults;
