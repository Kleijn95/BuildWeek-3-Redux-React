import { Button, Card, CardLink } from "react-bootstrap";
import { PatchCheck } from "react-bootstrap-icons";

function MainProfile() {
  return (
    <Card>
      <Card.Body
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      ></Card.Body>

      <Card.Body className="mt-4">
        <img
          className="rounded-pill img-fluid object-fit-cover w-25"
          src="https://images.unsplash.com/photo-1589140915708-20ff586fe767?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <Card.Title className="d-flex justify-content-between">
          <p>
            name Antonio Kleijn <PatchCheck />
          </p>
          <p>I.I.S. Concetto Marchesi - Mascalucia (CT)</p>
        </Card.Title>
        <Card.Text>title Dev</Card.Text>
        <Card.Text>
          area Pedara,Sicilia,Italia + <CardLink onClick={() => alert("ok")}>Informazioni di Contatto</CardLink>
        </Card.Text>
        <Button variant="primary" className="me-2 rounded-pill">
          Disponibile per
        </Button>
        <Button variant="primary" className="me-2 rounded-pill">
          Aggiorna sezione del Profilo
        </Button>
        <Button variant="primary" className="me-2 rounded-pill">
          Migliora Profilo
        </Button>
        <Button variant="primary " className="me-2 rounded-pill">
          Risorse
        </Button>
        <Card.Body className="bg-danger rounded-3 mt-3">
          <Card.Text>
            Disponibile a trovare: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore nobis
            totam quae, quia officia, tempore possimus, facilis officiis nulla laboriosam perferendis nemo neque aperiam
            explicabo. Ea culpa voluptatem ipsa?
            <Card.Text>
              <CardLink>Mostra Dettagli</CardLink>
            </Card.Text>
          </Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default MainProfile;
