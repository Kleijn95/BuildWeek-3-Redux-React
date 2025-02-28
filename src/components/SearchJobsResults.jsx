import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import JobsResults from "./JobsResults";

const SearchJobsResults = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobSearch);

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
        <Col className="col-12">
          <JobsResults jobs={jobs} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJobsResults;
