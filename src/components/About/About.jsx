import "../blocks/about.css";
import myphoto from "../../images/myphoto.jpg";


function About() {

   return (
     <section className="about">
      <img
      src= {myphoto}
      alt="Minha Foto"
      className="about__image"
      />
       <div className="about__content">
        <h2 className="about__title">Sobre Mim</h2>
        <p className="about__text">Olá! Eu sou a Marcela Moura.Sou brasileira morando na França.
             Sou apaixonada por animais desde criança 
             e transformei esse amor na minha profissão. Ofereço um cuidado 
             personalizado e carinhoso para que você possa viajar tranquilo, 
             sabendo que seu pet está em boas mãos.
        </p>
        
       </div>
     </section>
  )
}

export default About;
