import { Card, Button, ListGroup, Container, Row, Col, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ArrowRight, Linkedin, X, Search } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany, fetchJobs, fetchProfile } from "../redux/actions/profileActions";

function JobsMain() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [visibleJobsCount, setVisibleJobsCount] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTitleModal, SetShowTitleModal] = useState(false);
  const [showCompanyModal, SetShowCompanyModal] = useState(false);
  const [currentTitle, setCurrentTitle] = useState();
  const currentCompany = useSelector((state) => state.company.data);
  console.log(currentCompany);

  console.log(currentTitle);
  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleCompanyClick = async (job) => {
    SetShowCompanyModal(true); // Mostra il modal
    setCurrentTitle(job); // Imposta il job corrente come currentTitle

    const companyName = job.company_name; // Estrai il nome della compagnia

    // Esegui la fetch asincrona con il company_name
    await dispatch(fetchCompany(companyName)); // Fetch dei dati aziendali

    // Ora i dati saranno disponibili nello stato globalmente, nella proprietà currentCompany
  };

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setVisibleJobsCount(5);
    } else {
      setVisibleJobsCount(jobs.length);
    }
  };
  if (!profile) {
    return <p>Caricamento...</p>;
  }

  if (loading) {
    return <p>Caricamento annunci di lavoro...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }
  return (
    //offerte lavoro

    <Container>
      <Card className="mb-3 shadow-sm border-0 p-3 ">
        <Card.Title className="fw-bold fs-5">Le principali offerte di lavoro per te</Card.Title>
        <Card.Subtitle className="text-muted mb-3">
          In base al tuo profilo, alle tue preferenze e attività come candidature, ricerche e salvataggi
        </Card.Subtitle>

        <ListGroup variant="flush">
          {Array.isArray(jobs) && jobs.length === 0 ? (
            <ListGroup.Item>No job offers available</ListGroup.Item>
          ) : Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.slice(0, visibleJobsCount).map((job, index) => (
              <ListGroup.Item key={index}>
                <div className="d-flex justify-content-between">
                  <h6
                    className="fw-bold "
                    style={{ color: "#0B66C2", cursor: "pointer" }}
                    onClick={() => {
                      SetShowTitleModal(true);
                      setCurrentTitle(job);
                    }}
                  >
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Informazioni sul lavoro</Tooltip>}
                    >
                      <span> {job.title} </span>
                    </OverlayTrigger>
                  </h6>

                  <X className="fs-3" />
                </div>
                <p className="text-muted mb-1">
                  <span onClick={() => handleCompanyClick(job)}>{job.company_name}</span> -{" "}
                  {job.candidate_required_location} {job.job_type}
                </p>
                <p className="text-muted mb-1">{job.category}</p>
                <small className="text-muted">
                  {job.promoted && "Promosso"} • <Linkedin style={{ marginBottom: "0.2rem", color: "#0B66C2" }} />{" "}
                  Candidatura semplice
                </small>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>Loading...</ListGroup.Item>
          )}
        </ListGroup>

        {/* Bottone per mostrare/nascondere gli altri annunci */}
        <Button variant="link" className="mt-2 text-decoration-none text-black" onClick={handleShowMore}>
          {isExpanded ? "Mostra meno" : "Mostra tutto"} <ArrowRight />
        </Button>
      </Card>

      {/* lasciati trova */}

      <Card className="mb-3 p-3">
        <div className="d-flex justify-content-between">
          <Card.Title className="fw-bold fs-5">Lasciati trovare dalle offerte di lavoro</Card.Title>
          <X className="fs-3" />
        </div>
        <Card.Text className="text-muted mb-0">
          Ricevi segnalazioni più rilevanti tenendo aggiornate le tue preferenze.
        </Card.Text>

        <Card.Body className="mt-0 d-flex align-items-center">
          <img
            className="rounded-pill img-fluid object-fit-cover"
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "60px",
              height: "60px",
              top: "-40px",
              left: "10px",
            }}
          />
          <div className="ms-2">
            <p className="mb-0 fw-semibold"> Disponibile a lavorare </p>
            <p className="mb-0 fw-normal small ">Ultimo aggiornamento: più di 3 mesi fa</p>
          </div>{" "}
        </Card.Body>

        <Button
          className="rounded-pill fw-semibold"
          size="sm"
          style={{ maxWidth: "12rem", backgroundColor: "#0B66C2" }}
        >
          Aggiorna le preferenze
        </Button>
      </Card>

      {/* ricerche lavoro */}

      <Card className="p-3">
        <Card.Title className="fw-bold fs-5">Ricerche di offerte di lavoro suggerite</Card.Title>
        <Row className="g-2">
          {[
            "English Second Language Tutor",
            "English Tutor",
            "English Specialist",
            "Reading Tutor",
            "Language Tutor",
            "English Language Instructor",
          ].map((job, index) => (
            <Col key={index} xs={12} sm={6} md={6}>
              <Button variant="outline-primary" size="sm" className="rounded-pill d-flex align-items-center ">
                <Search className="me-1" /> {job}
              </Button>
            </Col>
          ))}
        </Row>
      </Card>

      <Modal show={showTitleModal} onHide={() => SetShowTitleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentTitle ? `Informazioni su ${currentTitle.title}` : "Informazioni su..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentTitle ? (
            <div
              dangerouslySetInnerHTML={{
                __html: currentTitle.description,
              }}
            />
          ) : (
            "Caricamento..."
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => SetShowTitleModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCompanyModal} onHide={() => SetShowCompanyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentTitle ? `Offerte di lavoro per ${currentTitle.company_name}` : "Offerte di lavoro..."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentCompany && currentCompany.length > 0 ? (
            <ul>
              {currentCompany.map((job, index) => (
                <li key={index}>
                  <h5>{job.title}</h5>
                  <p dangerouslySetInnerHTML={{ __html: job.description }} />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nessuna offerta di lavoro trovata per questa compagnia.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => SetShowCompanyModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default JobsMain;
