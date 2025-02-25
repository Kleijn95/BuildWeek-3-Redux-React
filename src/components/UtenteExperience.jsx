import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUtenteExperience } from "../redux/actions/profileActions";
import { useParams } from "react-router-dom";

function Experience() {
  const dispatch = useDispatch();
  const { userId } = useParams(); // Ottieni l'`userId` dall'URL
  const experiences = useSelector((state) => state.experienceUtente.content);

  console.log({ userId });

  useEffect(() => {
    if (userId) {
      // Controlla se userId è valido
      dispatch(fetchUtenteExperience(userId)); // Passa userId alla funzione
    }
  }, [dispatch, userId]); // Aggiungi userId alle dipendenze

  if (experiences.length === 0) {
    return <p>Non ci sono esperienze</p>;
  }

  return (
    <Container style={{ backgroundColor: "white" }} className="border rounded-3 mt-3 px-3 pt-3">
      <h4>Esperienze</h4>

      <Container fluid>
        {experiences.map((exp) => (
          <Row key={exp._id}>
            <Col xs="2">
              <Image fluid src={exp.image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
            </Col>
            <Col xs="10" className="ps-0">
              <h5>{exp.role}</h5>
              <p className="mb-0">{exp.company}</p>
              <p className="mb-0">
                {exp.startDate.slice(0, 10)} - {exp.endDate ? exp.endDate.slice(0, 10) : "fino ad oggi"}
              </p>
              <p className="mb-0">{exp.area}</p>
              <p className="mt-2">{exp.description}</p>
            </Col>
            <hr style={{ color: "gray" }} />
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
