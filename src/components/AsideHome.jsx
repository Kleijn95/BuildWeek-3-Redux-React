import { Card, NavDropdown } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const AsideCard = () => {
  return (
    <div>
      <Card className="p-3" style={{ width: "100%", borderRadius: "10px" }}>
        <Card.Body className="p-0">
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title className="fw-medium fs-5 pb-2 m">In primo piano</Card.Title>
            <InfoSquareFill className="mb-5 rounded" />
          </div>
          <Card.Subtitle className="text-secondary mb-2" style={{ fontSize: "0.85rem" }}>
            a cura di LinkedIn Notizie
          </Card.Subtitle>
          <div>
            {[
              { title: "Fusione tra Saipem e Subsea7", time: "1 giorno fa", readers: "934" },
              { title: "Priorità benessere per i lavoratori", time: "1 giorno fa", readers: "336" },
              { title: 'Roma ospita la COP16 "bis"', time: "1 giorno fa", readers: "275" },
              { title: "Stipendi più bassi per le donne", time: "22 ore fa", readers: "170" },
              { title: "Droni che riprendono quota", time: "19 ore fa", readers: "120" },
            ].map((news, index) => (
              <div key={index} className="mb-2">
                <strong style={{ fontSize: "0.9rem" }}>{news.title}</strong>
                <br />
                <small className="text-muted">
                  {news.time} · {news.readers} lettori
                </small>
              </div>
            ))}
          </div>
          <NavDropdown className="fw-semibold fs-6" title="Vedi altro" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Card.Body>

        <Card.Body className="pt-2 mt-3 p-0">
          <Card.Title className="text-muted fs-6">I giochi di oggi</Card.Title>
          <div className="d-flex align-items-center mb-2">
            <div>
              <strong style={{ fontSize: "0.9rem" }}>Tango</strong>
              <br />
              <small className="text-muted">Armonizza la griglia</small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <strong style={{ fontSize: "0.9rem" }}>Queens</strong>
              <br />
              <small className="text-muted">Incorona ogni regione</small>
            </div>
          </div>
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
    </div>
  );
};

export default AsideCard;
