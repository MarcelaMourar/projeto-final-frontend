import {useState, useEffect} from 'react';
import "../blocks/main.css";
import img1 from "../../images/barthoekyra.jpg";
import img2 from "../../images/ameliee.jpg";
import img3 from "../../images/ev.jpg";
import img4 from "../../images/dalmata.jpg";
import img5 from "../../images/amelie.jpg";
import img6 from "../../images/kyraebartho.jpg";
import img7 from "../../images/cachorito.jpg";

function Main() {
    const images = [ img1, img2, img3,img4, img5, img6, img7];
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    const timer= setInterval (() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
   }, [images.length]);

  return (
        <main className="main">
            <section className='hero'>
                <img 
                    src={images[currentIndex]} 
                    alt="Pets" 
                    className='hero__image'
                />   
                <h1 className='hero__title'>Cuido do seu pet com amor</h1>   
            </section>
           <section className="services">
    <h2 className="services__title">Meus Serviços</h2>
       <div className="services__container">
        <p className="services__item">🐾 Passeios</p>
        <p className="services__item">🥣 Comida</p>
        <p className="services__item">💊 Medicamento</p>
        <p className="services__item">🌙 Dormir juntos</p>
    </div>
</section>
        </main>
    );
}

export default Main;


    