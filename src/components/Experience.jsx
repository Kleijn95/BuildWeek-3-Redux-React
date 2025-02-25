import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../redux/actions/profileActions";

function Experience() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.content);
  useEffect(() => {
    dispatch(fetchExperience());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <Container style={{ backgroundColor: "white" }} className="border rounded-3 mt-3 px-3 pt-3">
      <div className="d-flex justify-content-between">
        <h4>Experience</h4>
        <div>
          <Plus className="fs-2 mx-2" />
          <PencilSquare className="fs-5 mx-2" />
        </div>
      </div>
      <Container fluid>
        {experiences.map((exp) => (
          <Row key={exp._id}>
            <Col xs="2">
              <Image fluid src={exp.image} />
            </Col>
            <Col xs="10" className="ps-0">
              <h5>{exp.role}</h5>
              <p className="mb-0">{exp.company}</p>
              <p className="mb-0">
                {exp.startDate.slice(0, 10)} - {exp.endDate ? exp.endDate.slice(0, 10) : "up to this day"}
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
