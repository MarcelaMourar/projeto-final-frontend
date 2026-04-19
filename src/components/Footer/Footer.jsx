import { useState, useEffect } from "react";
import "../blocks/footer.css";
import dogFactsApi from "../../utils/api";

function Footer () {
    const [fact, setFact] = useState("");
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dogFactsApi.getRandomFact()
      .then((data) => {
        setFact(data.data[0].attributes.body);
      })
      .catch((err) => {
        console.error(err);
        setFact("Cães tornam a vida melhor.");
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, []);

   return (
    <footer className="footer">
       <div className="footer__social">
        <a 
          href="https://www.instagram.com/marcelamourar/" 
          target="_blank" 
          rel="noreferrer"
          className="footer__link"
        >
          📸 Instagram
        </a>
        <a 
          href="https://www.linkedin.com/in/marcela-moura-44437b207/" 
          target="_blank" 
          rel="noreferrer"
          className="footer__link"
        >
          💼 LinkedIn
        </a>
      </div>

      
      <div className="footer__info">
        <div className="footer__fact-container">
          <span className="footer__fact-tag">Dica Pet:</span>
          {isLoading ? (
            <p className="footer__fact-text">Buscando curiosidade...</p>
          ) : (
            <p className="footer__fact-text">"{fact}"</p>
          )}
        </div>
        <p className="footer__copyright">&copy; 2026 Marcela Moura</p>
      </div>
    </footer>
  );
}

export default Footer;