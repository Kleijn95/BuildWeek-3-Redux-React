import { Dropdown } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <a target="_blank" href="https://about.linkedin.com/it-it">
            Informazioni
          </a>
          <a target="_blank" href="https://it.linkedin.com/legal/professional-community-policies?">
            Informativa sulla community professionale
          </a>
          <Dropdown className="p-0 m-0 border-0" style={{ fontSize: "0.9rem", color: "#666" }}>
            <Dropdown.Toggle
              className="p-0 m-0 border-0"
              style={{ fontSize: "0.9rem", color: "#666" }}
              variant="white"
              id="dropdown-privacy"
            >
              Privacy e condizioni
            </Dropdown.Toggle>

            <Dropdown.Menu variant="white">
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/privacy-policy?">
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/user-agreement?">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/l/linkedin-pages-terms?">
                Termini e condizioni della pagina
              </Dropdown.Item>
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/cookie-policy?">
                informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/copyright-policy?">
                informativa sul copyright
              </Dropdown.Item>
              <Dropdown.Item target="_blank" href="https://it.linkedin.com/legal/california-privacy-disclosure?">
                Opzioni relative all&apos;informativa sulla privacy (Stato della California)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a
            target="_blank"
            href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
          >
            sales Solutions
          </a>
          <a target="_blank" href="https://about.linkedin.com/transparency">
            Centro di sicurezza
          </a>
        </div>
        <div className="footer-column">
          <a target="_blank" href="https://it.linkedin.com/accessibility?">
            Accessibilità
          </a>
          <a target="_blank" href="https://careers.linkedin.com/">
            Carriera
          </a>
          <a target="_blank" href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it">
            Opzioni per gli annunci pubblicitari
          </a>
          <a target="_blank" href="https://mobile.linkedin.com/it-it">
            Mobile
          </a>
        </div>
        <div className="footer-column">
          <a
            target="_blank"
            href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"
          >
            Talent Solutions
          </a>
          <a
            target="_blank"
            href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"
          >
            Soluzioni di Marketing
          </a>
          <a target="_blank" href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f">
            Pubblicità
          </a>
          <a target="_blank" href="https://business.linkedin.com/small-business?&src=li-footer">
            Piccole imprese
          </a>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <span className="icon">
              <QuestionCircleFill />
            </span>
            <div className="footer-text">
              <p>Domande?</p>
              <small>Visita il nostro Centro assistenza.</small>
            </div>
          </div>
          <div className="footer-item">
            <span className="icon">
              <GearFill />
            </span>
            <div className="footer-text">
              <p>Gestisci il tuo account e la tua privacy</p>
              <small>Vai alle impostazioni</small>
            </div>
          </div>
          <div className="footer-item">
            <span className="icon">
              <ShieldShaded />
            </span>
            <div className="footer-text">
              <p>Trasparenza sui contenuti consigliati</p>
              <small>Scopri di più sui contenuti consigliati.</small>
            </div>
          </div>
        </div>
        <div className="footer-dropdown"></div>
      </div>
      <div className="footer-bottom">
        <p>LinkedIn Corporation © 2025</p>
      </div>
    </footer>
  );
};
export default Footer;
