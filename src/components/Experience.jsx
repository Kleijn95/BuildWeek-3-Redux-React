import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../redux/actions/profileActions";

function Experience() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.content);
  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);
  return (
    <Container style={{ backgroundColor: "white" }} className="border rounded-3 mt-3 px-3 pt-3">
      <div className="d-flex justify-content-between">
        <h4>Experience</h4>
        <div>
          <Plus className="fs-2 mx-2" onClick={() => setShowModal(true)} style={{ cursor: "pointer" }} />
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
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Title*</FormLabel>
              <FormControl type="text" placeholder="ex. Web Developer" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Employment type</FormLabel>
              <Form.Select aria-label="Default select example">
                <option>Please select</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Self-Employed">Freelance</option>
                <option value="Self-Employed">Contract</option>
                <option value="Self-Employed">Internship</option>
              </Form.Select>
            </FormGroup>
            <FormGroup>
              <FormLabel>Company or Organization*</FormLabel>
              <FormControl type="text" placeholder="ex. AlmaViva" />
            </FormGroup>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I'm currently working in this role" />
            </Form.Group>
            <FormGroup>
              <FormLabel>Start date*</FormLabel>
              <FormControl type="date" />
            </FormGroup>
            <FormGroup>
              <FormLabel>End date</FormLabel>
              <FormControl type="date" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Location</FormLabel>
              <FormControl type="text" placeholder="ex. Rome, Italy" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Media</FormLabel>
              <FormControl type="file" />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save Experience</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Experience;
