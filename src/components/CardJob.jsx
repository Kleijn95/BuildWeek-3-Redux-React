import { Card } from "react-bootstrap";

function CardJob() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title>Qualifiche</Card.Title>
        <Card.Text>Fatti notare aggiungendo competenze relative alla tua esperienza come Web Developer</Card.Text>
      </Card.Body>
      <Card.Body>
        <hr></hr>
        <Card.Title>Competenze aggiunte dall’autore dell’offerta di lavoro</Card.Title>
        <Card.Text>
          Accedi a informazioni esclusive sui candidati, scopri le offerte di lavoro per cui rientreresti fra i migliori candidati, e tanto altro
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <hr></hr>
        <Card.Title>Informazioni sull’azienda</Card.Title>
        <Card.Text>
          Ba nasce nel 2011 con la volontà di proporre una cucina cinese autentica a testimonianza di una tradizione culinaria millenaria, frutto del lavoro e
          della passione di Marco e Francesca Liu
        </Card.Text>
      </Card.Body>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default CardJob;
