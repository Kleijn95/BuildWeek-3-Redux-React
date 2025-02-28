import { Container, Row, Col, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";

import { useSelector } from "react-redux";
import JobsResults from "./JobsResults";
import JobDetail from "./JobDetail";
import { useEffect, useState } from "react";
import CardJob from "./CardJob";

const SearchJobsResults = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobSearch);
  const [selectedJob, setSelectedJob] = useState(null);
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  console.log("Jobs in SearchJobsResults:", jobs);

  useEffect(() => {
    setSelectedJob(null);
  }, [jobs]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <Container className="mt-1">
      <Row className="d-flex justify-content-center bg-white">
        <Col className="col-12 d-flex justify-content-center gap-3 mt-4">
          {[
            "Lavoro",
            "Data di pubblicazione",
            "Livello di esperienza",
            "Azienda",
            "A distanza",
            "Candidatura semplice",
          ].map((variant, index) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={index === 0 ? "success" : "light"}
              title={variant}
              className="rounded-pill mb-3"
              style={{ minWidth: "150px" }}
            >
              <Dropdown.Item eventKey="1">Tutto</Dropdown.Item>
              <Dropdown.Item eventKey="2">Persone</Dropdown.Item>
              <Dropdown.Item eventKey="3">Lavoro</Dropdown.Item>
              <Dropdown.Item eventKey="4">Post</Dropdown.Item>
              <Dropdown.Item eventKey="5" active>
                Aziende
              </Dropdown.Item>

              <Dropdown.Item eventKey="4">Eventi</Dropdown.Item>
            </DropdownButton>
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mt-5">
          <JobsResults jobs={jobs} onJobSelect={handleJobSelect} />
        </Col>
        <Col xs={12} md={6} className="mt-5">
          <JobDetail job={selectedJob} />

          <CardJob />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobsResults;
