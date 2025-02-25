import { Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <a href="https://about.linkedin.com/it-it">Informazioni</a>
          <a href="https://it.linkedin.com/legal/professional-community-policies?">
            Informativa sulla community professionale
          </a>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-privacy">
              Privacy e condizioni
            </Dropdown.Toggle>

            <Dropdown.Menu variant="white">
              <Dropdown.Item href="https://it.linkedin.com/legal/privacy-policy?">
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="https://it.linkedin.com/legal/user-agreement?">Contratto di licenza</Dropdown.Item>
              <Dropdown.Item href="https://it.linkedin.com/legal/l/linkedin-pages-terms?">
                Termini e condizioni della pagina
              </Dropdown.Item>
              <Dropdown.Item href="https://it.linkedin.com/legal/cookie-policy?">informativa sui cookie</Dropdown.Item>
              <Dropdown.Item href="https://it.linkedin.com/legal/copyright-policy?">
                informativa sul copyright
              </Dropdown.Item>
              <Dropdown.Item href="https://it.linkedin.com/legal/california-privacy-disclosure?">
                Opzioni relative all&apos;informativa sulla privacy (Stato della California)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer">
            sales Solutions
          </a>
          <a href="https://about.linkedin.com/transparency">Centro di sicurezza</a>
        </div>
        <div className="footer-column">
          <a href="https://it.linkedin.com/accessibility?">Accessibilità</a>
          <a href="https://careers.linkedin.com/">Carriera</a>
          <a href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it">
            Opzioni per gli annunci pubblicitari
          </a>
          <a href="https://mobile.linkedin.com/it-it">Mobile</a>
        </div>
        <div className="footer-column">
          <a href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer">
            Talent Solutions
          </a>
          <a href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer">
            Soluzioni di Marketing
          </a>
          <a href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f">Pubblicità</a>
          <a href="https://business.linkedin.com/small-business?&src=li-footer">Piccole imprese</a>
        </div>
        <div className="footer-column">
          <div className="footer-item">
            <span className="icon">
              <i className="bi bi-question-circle-fill"></i>{" "}
            </span>
            <p>Domande?</p>
            <small>Visita il nostro Centro assistenza.</small>
          </div>
          <div className="footer-item">
            <span className="icon">
              <i className="bi bi-gear-fill"></i>
            </span>
            <p>Gestisci il tuo account e la tua privacy</p>
            <small>Vai alle impostazioni</small>
          </div>
          <div className="footer-item">
            <span className="icon">
              <i className="bi bi-shield-shaded"></i>
            </span>
            <p>Trasparenza sui contenuti consigliati</p>
            <small>Scopri di più sui contenuti consigliati.</small>
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
