import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, FormControl, FormGroup, FormLabel, ModalTitle, ModalBody } from "react-bootstrap";
import { ArrowLeft, PencilSquare, Plus, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperience, fetchExperience, postExperience, putExperience, uploadPhoto } from "../redux/actions/profileActions";
import { useNavigate } from "react-router-dom";

function ExperienceEditSection() {
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadImage, setUploadImage] = useState({});
  const [expId, setExpId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const experiences = useSelector((state) => state.experience.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePhoto = (e) => {
    setUploadImage(e.target.files[0]);
  };

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
    setFormData(() => ({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleShowModal = (experience = null) => {
    if (experience) {
      setFormData({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate.slice(0, 10),
        endDate: experience.endDate ? experience.endDate.slice(0, 10) : "",
        area: experience.area,
        description: experience.description,
        currentRole: experience.endDate ? false : true,
      });
      setExpId(experience._id);
    } else {
      setFormData({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        area: "",
        description: "",
      });
      setExpId(null);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expId) {
      dispatch(putExperience(expId, formData));
    } else {
      dispatch(postExperience(formData));
    }
    setShowModal(false);
    setSubmitted(true);
  };

  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("image", uploadImage);
    dispatch(uploadPhoto(expId, formDataToSend));
    setShowModal(false);
    setExpId("");
  };

  useEffect(() => {
    dispatch(fetchExperience());
    setSubmitted(false);
    setDeleted(false);
  }, [submitted, dispatch, deleted]);
  return (
    <Container style={{ backgroundColor: "white" }} className="border rounded-3 px-3 pt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Button variant="outline-*" className="mb-2 me-3 fs-3" onClick={() => navigate("/")}>
            <ArrowLeft />
          </Button>
          <h4>Experience</h4>
        </div>
        <div>
          <Button variant="outline-*" className="mx-2" onClick={() => handleShowModal()}>
            <Plus className="fs-2" />
          </Button>
        </div>
      </div>
      <Container fluid>
        {experiences.map((exp) => (
          <Row key={exp._id}>
            <Col xs={2}>
              {exp.image ? (
                <Image fluid src={exp.image} />
              ) : (
                <div className="position-relative">
                  <Image
                    fluid
                    src="https://images.unsplash.com/photo-1528810289438-283f885c31ef?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <Button
                    variant="outline-light"
                    className="position-absolute start-50 top-50 translate-middle btn-sm"
                    onClick={() => {
                      setShowUploadModal(true);
                      setExpId(exp._id);
                    }}
                  >
                    upload picture
                  </Button>
                </div>
              )}
            </Col>
            <Col xs={9} className="ps-0">
              <h5>{exp.role}</h5>
              <p className="mb-0">{exp.company}</p>
              <p className="mb-0">
                {exp.startDate.slice(0, 10)} - {exp.endDate ? exp.endDate.slice(0, 10) : "up to this day"}
              </p>
              <p className="mb-0">{exp.area}</p>
              <p className="mt-2">{exp.description}</p>
            </Col>
            <Col xs={1} className="pe-0 d-flex">
              <PencilSquare className=" mx-2" onClick={() => handleShowModal(exp)} />
              <Trash
                style={{ color: "red" }}
                onClick={() => {
                  dispatch(deleteExperience(exp._id));
                  alert("Sei sicuro a voler cancellare l'esperienza?");
                  setDeleted(true);
                }}
              />
            </Col>
            <hr style={{ color: "gray" }} />
          </Row>
        ))}
      </Container>
      <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <ModalTitle>Add photo</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <Form onSubmit={handleSubmitPhoto}>
            <FormGroup className="mt-2">
              <FormControl className="mt-4" type="file" name="image" onChange={handleChangePhoto} />
            </FormGroup>
            <div className="d-flex justify-content-end mt-4">
              <Button className="me-3 mb-1 rounded-5 px-3 py-1" type="submit" variant="primary" style={{ backgroundColor: "#0C66C2" }}>
                Save
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Add Experience</Modal.Title>
          </Modal.Header>
        </Container>
        <Modal.Body className="pb-0">
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
                <FormLabel>Description*</FormLabel>
                <FormControl
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="List your major duties and successes, highlighting specific projects"
                  required
                />
              </FormGroup>
              {/* <FormGroup className="mt-2">
                <FormLabel>Media</FormLabel>
                <FormControl type="file" name="image" value={formData.image} onChange={handleChange} />
              </FormGroup> */}
            </Container>
            <div className="d-flex justify-content-end">
              <Button className="me-3 mb-3 rounded-5 px-3 py-1" type="submit" variant="primary" style={{ backgroundColor: "#0C66C2" }}>
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ExperienceEditSection;
