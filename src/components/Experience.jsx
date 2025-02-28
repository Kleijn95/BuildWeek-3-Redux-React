import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row, FormControl, FormGroup, FormLabel, ModalTitle, ModalBody, Alert } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience, postExperience, uploadPhoto } from "../redux/actions/profileActions";
import { useNavigate } from "react-router-dom";

function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [expId, setExpId] = useState("");
  const [uploadImage, setUploadImage] = useState({});
  const [postNotifica, setPostNotifica] = useState(false);
  const experiences = useSelector((state) => state.experience.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });
  const handleChangePhoto = (e) => {
    setUploadImage(e.target.files[0]);
  };

  const handleChange = (propName, propValue) => {
    setFormData({
      ...formData,
      [propName]: propValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postExperience(formData, uploadImage));
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      area: "",
      description: "",
    });
    setShowModal(false);
    setPostNotifica(true);
    setTimeout(() => setPostNotifica(false), 3000);
  };

  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    if (!expId) {
      console.error("No experience ID set");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("experience", uploadImage);
    dispatch(uploadPhoto(expId, formDataToSend));
    setShowModal(false);
    setShowUploadModal(false);
    setPostNotifica(true);
    setTimeout(() => {
      setPostNotifica(false);
      setExpId("");
    }, 3000);
  };

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);
  return (
    <Container fluid>
      {postNotifica && (
        <Alert className="text-center" variant="success">
          {expId ? "Photo dell'esperienza aggiornata correttamente" : "Esperienza aggiunta con successo!"}
        </Alert>
      )}
      <Container style={{ backgroundColor: "white" }} className="border rounded-3 mt-3 px-3 pt-3">
        <div className="d-flex justify-content-between">
          <h4>Experience</h4>

          <div>
            <Button variant="outline-*" className="p-0 mx-2" onClick={() => setShowModal(true)}>
              <Plus className="fs-2" />
            </Button>
            <Button variant="outline-*" className="pb-2 ms-2" onClick={() => navigate("/experience")}>
              <PencilSquare className="fs-5" />
            </Button>
          </div>
        </div>
        <Container fluid>
          {experiences.map((exp) => (
            <Row key={exp._id}>
              <Col xs="2">
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
              <Col xs="10" className="ps-0">
                <h5 className="mb-0">{exp.role}</h5>
                <p className="mb-0">{exp.company}</p>
                <p className="mb-0 text-secondary">
                  {exp.startDate.slice(0, 10)} - {exp.endDate ? exp.endDate.slice(0, 10) : "Presente"}
                </p>
                <p className="mb-0 text-secondary">{exp.area}</p>
                <p className="mt-2">{exp.description}</p>
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
              <Modal.Title>Aggiungi esperienza</Modal.Title>
            </Modal.Header>
          </Container>
          <Modal.Body className="pb-0">
            <Form onSubmit={handleSubmit}>
              <Container className="mb-4">
                <p className="text-secondary mb-0" style={{ fontSize: "15px" }}>
                  * Indica che è obbligatorio
                </p>
                <FormGroup className="mt-2">
                  <FormLabel>Qualifica*</FormLabel>
                  <FormControl
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    placeholder="ex. Web Developer"
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>Azienda o Organizzazione*</FormLabel>
                  <FormControl
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="ex. AlmaViva"
                  />
                </FormGroup>
                <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="currentRole"
                    onChange={(e) => handleChange("currentRole", e.target.checked)}
                    label="Attualmente ricopro questo ruolo"
                  />
                </Form.Group>
                <FormGroup className="mt-2">
                  <FormLabel>Data di Inizio*</FormLabel>
                  <FormControl type="date" name="startDate" value={formData.startDate} onChange={(e) => handleChange("startDate", e.target.value)} required />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>Data di fine</FormLabel>
                  <FormControl
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={(e) => handleChange("endDate", e.target.value)}
                    disabled={formData.currentRole}
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>Località</FormLabel>
                  <FormControl
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={(e) => handleChange("area", e.target.value)}
                    placeholder="ex. Rome, Italy"
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>Descrizione*</FormLabel>
                  <FormControl
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="List your major duties and successes, highlighting specific projects"
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <FormLabel>Media (optional)</FormLabel>
                  <FormControl type="file" name="image" onChange={handleChangePhoto} />
                  {formData.image && (
                    <div className="mt-2">
                      <h5>Image Preview:</h5>
                      <Image src={URL.createObjectURL(formData.image)} fluid />
                    </div>
                  )}
                </FormGroup>
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
    </Container>
  );
}

export default Experience;
