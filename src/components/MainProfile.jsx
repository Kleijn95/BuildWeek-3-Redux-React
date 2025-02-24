import { Button, Card, CardLink } from "react-bootstrap";
import { PatchCheck } from "react-bootstrap-icons";

function MainProfile() {
  return (
    <Card style={{ position: "relative" }}>
      {/* Primo Card.Body con immagine di sfondo */}
      <Card.Body
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px", // Altezza fissa
        }}
      ></Card.Body>

      {/* Secondo Card.Body con l'immagine del profilo */}
      <Card.Body className="mt-4" style={{ position: "relative", zIndex: 1 }}>
        <img
          className="rounded-pill img-fluid object-fit-cover"
          src="https://images.unsplash.com/photo-1589140915708-20ff586fe767?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{
            width: "150px", // Larghezza fissa per l'immagine
            height: "150px", // Altezza fissa per l'immagine
            position: "absolute", // Posiziona l'immagine in modo assoluto
            top: "-75px", // Sposta l'immagine verso l'alto (metà dell'altezza)
            left: "20px", // Distanza dal bordo sinistro
            border: "4px solid white", // Aggiungi un bordo per separare l'immagine dallo sfondo
          }}
        />
        <Card.Title className="d-flex justify-content-between mt-5 pt-4">
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
