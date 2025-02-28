/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { BriefcaseFill, BuildingFill, Calendar3, GlobeAmericas } from "react-bootstrap-icons";

function JobDetail({ job }) {
  // Stato per gestire la visualizzazione del testo completo o ridotto
  const [isExpanded, setIsExpanded] = useState(false);

  // Funzione per rimuovere i tag HTML e restituire solo il testo normale
  function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, ""); // Rimuove i tag HTML
  }

  if (!job) {
    return null; // Se non c'è nessun lavoro selezionato, non mostra nulla
  }

  // Usa la funzione per "stripare" i tag HTML dalla descrizione
  const cleanedDescription = stripHtmlTags(job.description);

  // Numero massimo di caratteri da mostrare
  const MAX_CHARACTERS = 500; // Limite di caratteri per le prime righe

  // Funzione per gestire il toggle tra mostrare tutto e mostrare una parte
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Title className="display-6 mb-3 mt-3">{job.category}</Card.Title>
          <Card.Text style={{ color: "gray" }}>
            <strong>
              {" "}
              <BuildingFill /> Company:
            </strong>{" "}
            {job.company_name}
          </Card.Text>
          <Card.Text style={{ color: "gray" }}>
            <strong>
              {" "}
              <GlobeAmericas /> Location:
            </strong>{" "}
            {job.candidate_required_location}
          </Card.Text>
          <Card.Text style={{ color: "gray" }}>
            <strong>
              {" "}
              <BriefcaseFill /> Type:
            </strong>{" "}
            {job.job_type}
          </Card.Text>
          <Card.Text style={{ color: "gray" }}>
            <strong>
              <Calendar3 /> Date:
            </strong>{" "}
            {new Date(job.publication_date).toLocaleDateString("it-IT")}
          </Card.Text>
          <Card.Body className="mt-2">
            <Button variant="primary" className="me-2 rounded-pill fw-semibold">
              Candidatura semplice
            </Button>

            <Button variant="outline-primary" className="me-2 rounded-pill fw-semibold btnchiaro">
              Salva
            </Button>
          </Card.Body>
          <Card.Title className=" mt-3 mb-4">Informazioni sull’offerta di lavoro</Card.Title>

          <Card.Text>{isExpanded ? cleanedDescription : `${cleanedDescription.slice(0, MAX_CHARACTERS)}...`} </Card.Text>

          {cleanedDescription.length > MAX_CHARACTERS && (
            <Button variant="link" onClick={toggleExpand}>
              {isExpanded ? "Mostra meno" : "Mostra di più"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default JobDetail;
