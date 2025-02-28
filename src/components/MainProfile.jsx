import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardLink,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { PatchCheck, PencilSquare } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, putProfile } from "../redux/actions/profileActions";
import Bio from "./Bio";
import { Link } from "react-router-dom";

function MainProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myprofile.data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const competenzeData = useSelector((state) => state.education.jobs) || [];
  const [randomJobs, setRandomJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddSectionsModal, setShowAddSectionsModal] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  });

  useEffect(() => {
    if (profile) {
      const getRandomJobs = (data) => {
        const randomCount = Math.floor(Math.random() * data.length) + 1;
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, randomCount);
      };

      const jobs = getRandomJobs(competenzeData);
      setRandomJobs(jobs);
    }
  }, [profile, competenzeData]);

  useEffect(() => {
    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleChangePhoto = (e) => {
    setProfilePhoto(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (profilePhoto) {
      dispatch(putProfile(formData, profilePhoto));
    } else {
      dispatch(putProfile(formData));
    }
    setShowModal2(false);

    dispatch(fetchProfile("https://striveschool-api.herokuapp.com/api/profile/me"));

    setFormData({
      name: "",
      surname: "",
      email: "",
      username: "",
      bio: "",
      title: "",
      area: "",
      image: null,
    });
  };

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        surname: profile.surname || "",
        email: profile.email || "",
        username: profile.username || "",
        bio: profile.bio || "",
        title: profile.title || "",
        area: profile.area || "",
        image: profile.image || null,
      });
    }
  }, [profile]);

  if (!profile) {
    return <p>Caricamento...</p>;
  }

  return (
    <>
      <Card style={{ position: "relative" }}>
        <Card.Body
          style={{
            backgroundImage: 'url("https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq")',
            backgroundSize: "cover",
            overflow: "hidden",
            backgroundPosition: "center",
            height: "200px",
          }}
        ></Card.Body>

        <Card.Body className="mt-4" style={{ position: "relative", zIndex: 1 }}>
          <img
            className="rounded-pill img-fluid object-fit-cover"
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              top: "-75px",
              left: "20px",
              border: "4px solid white",
            }}
          />
          <div className="d-flex justify-content-end me-3">
            <Button variant="outline-*" className="p-0 mx-2" onClick={() => setShowModal2(true)}>
              <PencilSquare className="fs-2" />
            </Button>{" "}
          </div>

          <Card.Title className="d-flex justify-content-between mt-5 pt-4 mb-0">
            <p className="mb-0 fs-4">
              {profile.name} {profile.surname} <PatchCheck />
            </p>
            <p className="me-5 mb-0 fs-5">Epicode</p>
          </Card.Title>
          <Card.Text className="mb-0">{profile.title}</Card.Text>
          <Card.Text>
            <span className="text-secondary ">{profile.area}</span> -{" "}
            <CardLink className="text-decoration-none" onClick={() => setShowModal(true)}>
              <span className=" fw-semibold">Informazioni di Contatto</span>
            </CardLink>
          </Card.Text>
          <Button variant="primary" className="me-2 rounded-pill fw-semibold">
            Disponibile per
          </Button>
          <Button
            variant="outline-primary"
            className="me-2 rounded-pill fw-semibold btn btnchiaro"
            onClick={() => setShowAddSectionsModal(true)}
            style={{ cursor: "pointer" }}
          >
            Aggiungi sezione del Profilo
          </Button>
          <Button variant="outline-primary" className="me-2 rounded-pill fw-semibold btnchiaro">
            Migliora Profilo
          </Button>
          <Button variant="outline-secondary" className="me-2 rounded-pill fw-semibold btnscuro text-secondary">
            Risorse
          </Button>

          <Modal show={showAddSectionsModal} onHide={() => setShowAddSectionsModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>AGGIUNGI AL PROFILO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6 className="fs-5">Sezioni principali</h6>
              <p>
                Iniziamo dalle basi. Se compili queste sezioni, sarà più facile trovarti per i recruiter e le persone
                che potresti conoscere.
              </p>

              <ListGroup variant="flush">
                <ListGroup.Item className="mb-3 ">
                  <Link className="nodecoration" to="#">
                    Aggiungi foto del profilo
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi informazioni
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi grado di formazione
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi posizione lavorativa
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi servizi
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi pausa lavorativa
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Link className="nodecoration" to="#">
                    Aggiungi competenze
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAddSectionsModal(false)}>
                Chiudi
              </Button>
            </Modal.Footer>
          </Modal>

          <Card.Body style={{ backgroundColor: "#DDE7F1" }} className=" rounded-3 mt-3">
            <Card.Text>
              <p className="mb-0 fw-semibold">Disponibile a lavorare</p>
              <p className="mb-0">Ruoli di {randomJobs.map((job) => job.lavoro).join(", ")}</p>
              <Card.Text>
                <CardLink className="text-decoration-none fw-semibold">Mostra Dettagli</CardLink>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
      <Bio />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {profile.name} {profile.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5">Informazioni di Contatto</p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Telefono:</strong> 3458914809
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/antonio-kleijn-hesselink-8247882b7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Vai al profilo{" "}
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={() => setShowModal2(false)} centered size="lg">
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Profilo</Modal.Title>
          </Modal.Header>
        </Container>
        <Modal.Body className="pb-0">
          <Form onSubmit={handleSubmit}>
            <Container className="mb-4">
              <FormGroup className="mt-2">
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Antonio"
                  required
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Surname</FormLabel>
                <FormControl
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Kleijn"
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Username</FormLabel>
                <FormControl
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Inserisci il tuo username"
                  disabled
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Area</FormLabel>
                <FormControl
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Pedara"
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Bio</FormLabel>
                <FormControl
                  as="textarea"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="List your major duties and successes, highlighting specific projects"
                  rows={5}
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Inserisci la tua email"
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Title</FormLabel>
                <FormControl
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Inserisci il tuo titolo"
                  required
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Media (Opzionale)</FormLabel>
                <FormControl type="file" name="image" onChange={handleChangePhoto} />
              </FormGroup>
            </Container>
            <div className="d-flex justify-content-end">
              <Button
                className="me-3 mb-3 rounded-5 px-3 py-1"
                type="submit"
                variant="primary"
                style={{ backgroundColor: "#0C66C2" }}
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MainProfile;
