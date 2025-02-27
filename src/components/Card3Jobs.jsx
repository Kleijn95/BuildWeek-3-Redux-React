import { Card } from "react-bootstrap";
import { BookmarkFill, Linkedin, ListUl, PencilSquare, SquareFill } from "react-bootstrap-icons";

function Card3Jobs() {
  return (
    <>
      <Card className="mt-2">
        <Card.Body>
          <h6 className="d-flex align-items-center mb-3">
            <ListUl className="fs-4 me-2" /> Preferenze
          </h6>
          <h6 className="d-flex align-items-center mb-3">
            <BookmarkFill style={{ color: "black", marginRight: "5px" }} /> Le mie offerte di lavoro
          </h6>
          <h6 className="d-flex align-items-center mb-3">
            <SquareFill className="text-warning me-2" /> Le mie informazioni aulla carriera
          </h6>
          <hr />
          <h6 className="text-primary">
            <PencilSquare className="fs-5 me-2 text-primary" /> Pubblica offerta gratuita
          </h6>
        </Card.Body>
      </Card>
      <Card.Footer className="text-center mt-3 ms-4  " style={{ maxWidth: "15rem", backgroundColor: "#F4F2EE" }}>
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-2 text-muted " style={{ fontSize: "0.8rem" }}>
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
          <span>Privacy & Terms ▼</span>
          <span>Ad Choices</span>
          <span>Advertising</span>
          <span>Business Services ▼</span>
          <span>Get the Linked app</span>
          <span>More</span>
        </div>
        <div className="d-flex justify-content-center align-items- pt-3">
          <small style={{ color: "#0D6EFD", fontWeight: "bold" }}>Linked</small>
          <Linkedin size={16} className="me-1 text-primary " style={{ marginTop: "0.1rem" }} />
          <small> Corporation © 2025</small>
        </div>
      </Card.Footer>
    </>
  );
}

export default Card3Jobs;
