import { Card } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Competenze = () => {
  const competenzeData = useSelector((state) => state.education.jobs) || [];

  // Funzione per mescolare l'array senza mutare l'originale
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5); // Crea una copia dell'array con slice()
  };

  // Ottieni due elementi casuali
  const randomJobs = shuffleArray(competenzeData).slice(0, 2);

  return (
    <Card className="p-3 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Competenze</h5>
        <div>
          <Plus className="fs-2 mx-2" />
          <PencilSquare className="me-2 fs-5 mx-2" />
        </div>
      </div>
      {randomJobs.map((job, index) => (
        <div key={index}>
          <h6 className="mb-2">
            <strong>{job.lavoro}</strong>
          </h6>
          {job.competenze.map((comp, i) => (
            <p key={i} className="d-flex align-items-center mb-1">
              <img
                src="https://static.vecteezy.com/ti/vettori-gratis/p1/22865742-colorato-neutro-colore-sfondo-con-acquerello-effetto-vettore-illustrazione-vettoriale.jpg"
                alt="skill"
                style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "10px" }}
              />
              <span>
                {comp.skill} - {comp.dove}
              </span>
            </p>
          ))}
          {index < 1 && <hr className="text-secondary" />}
        </div>
      ))}
      <button className="btn btn-light w-100 mt-2">Mostra tutte le competenze</button>
    </Card>
  );
};

export default Competenze;
