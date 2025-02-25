import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience, postExperience } from "../redux/actions/profileActions";

function Experience() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postExperience(formData));
    setShowModal(false);
  };

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
          <Form onSubmit={handleSubmit}>
            <Container className="mb-4">
              <FormGroup className="mt-2">
                <FormLabel>Title*</FormLabel>
                <FormControl type="text" name="role" value={formData.role} onChange={handleChange} placeholder="ex. Web Developer" required />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Company or Organization*</FormLabel>
                <FormControl type="text" name="company" value={formData.company} onChange={handleChange} placeholder="ex. AlmaViva" />
              </FormGroup>
              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name="currentRole" onChange={handleChange} label="I'm currently working in this role" />
              </Form.Group>
              <FormGroup className="mt-2">
                <FormLabel>Start date*</FormLabel>
                <FormControl type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>End date</FormLabel>
                <FormControl type="date" name="endDate" value={formData.endDate} onChange={handleChange} disabled={formData.currentRole} />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Location</FormLabel>
                <FormControl type="text" name="area" value={formData.area} onChange={handleChange} placeholder="ex. Rome, Italy" />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Description</FormLabel>
                <FormControl
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="List your major duties and successes, highlighting specific projects"
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Media</FormLabel>
                <FormControl type="file" />
              </FormGroup>
            </Container>
            <div className="d-flex justify-content-end">
              <Button className="me-3 mb-3" type="submit" variant="primary">
                Save Experience
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Experience;
