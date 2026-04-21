import {useState, useEffect} from 'react';
import "../blocks/main.css";
import img1 from "../../images/barthoekyra.jpg";
import img2 from "../../images/ameliee.jpg";
import img3 from "../../images/ev.jpg";
import img4 from "../../images/dalmata.jpg";
import img5 from "../../images/amelie.jpg";
import img6 from "../../images/kyraebartho.jpg";
import img7 from "../../images/cachorito.jpg";
import About from "../About/About";
import Modal from "../Modal/Modal";

function Main({ isLoginOpen, 
  setIsLoginOpen, 
  isRegisterOpen, 
  setIsRegisterOpen, 
  isSuccessOpen, 
  setIsSuccessOpen }) {
    const images = [ img1, img2, img3,img4, img5, img6, img7];
   const [currentIndex, setCurrentIndex] = useState(0);
   const [errorMessage, setErrorMessage] = useState("");


   useEffect(() => {
    const timer= setInterval (() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
   }, [images.length]);

   const switchToRegister = () => {
    setErrorMessage("");
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const switchToLogin = () => {
    setErrorMessage("");
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };


    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData);

        const savedUsers = JSON.parse(localStorage.getItem("usersList") || "[]");
        const userExists = savedUsers.some(user => user.email === userData.email);

        if (userExists) {
            setErrorMessage("Este e-mail já está cadastrado!");
            return;
        }

        savedUsers.push(userData);
        localStorage.setItem("usersList", JSON.stringify(savedUsers));

        setIsRegisterOpen(false);
        setIsSuccessOpen(true);
        e.target.reset();
    };

     const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");

        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData);

        const savedUsers = JSON.parse(localStorage.getItem("usersList") || "[]");
        
                const userFound = savedUsers.find(user => user.email === loginData.email);

        if (!userFound) {
            setErrorMessage("E-mail não encontrado!");
            return;
        }

        if (userFound.password !== loginData.password) {
            setErrorMessage("Senha incorreta!");
            return;
        }

        
        setIsLoginOpen(false);
       
    };

  return (
        <main className="main">
            <section className='hero'>
                <img 
                    src={images[currentIndex]} 
                    alt="Pets" 
                    className='hero__image'
                />   
                
            </section>
           <section className="services">
    <h2 className="services__title">Meus Serviços</h2>
       <div className="services__container">
        <div className="card">
            <span className="card__icon">🐾</span>
            <h3 className="card__title">Passeios</h3>
            <p className="card__text">Momentos de diversão e exercício com muito cuidado e atenção.</p>
        </div>
        
<div className="card">
    <span className="card__icon">🥣</span>
    <h3 className="card__title">Comida</h3>
    <p className="card__text">Comidinha servida com carinho, respeitando a rotina do seu pet.</p>
</div>

<div className="card">
<span className="card__icon">💊</span>
<h3 className="card__title">Medicamentos</h3>
<p className="card__text">Administração responsável conforme orientação do tutor.</p>
</div>
        
  <div className="card">
<span className="card__icon">🌙</span>
<h3 className="card__title">Dormir Juntos</h3>
<p className="card__text">Companhia noturna para pets carentes.</p>
</div>
    </div>
</section>
<About />

<Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Entrar">
                <form className="modal__form" onSubmit={handleLoginSubmit}>
                    {errorMessage && <p className="modal__error">{errorMessage}</p>}
                    <input  name="email" type="email" placeholder="E-mail" required />
                    <input name="password" type="password" placeholder="Senha" required />
                    <div className="modal__footer">
            <button type="submit" className="modal__button">Entrar</button>
            <p className="modal__switch-text">
              ou <span onClick={switchToRegister}>Inscreva-se</span>
            </p>
          </div>
                </form>
            </Modal >
<Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} title="Inscreva-se">
  <form className="modal__form" onSubmit={handleRegisterSubmit}>
          {errorMessage && <p className="modal__error">{errorMessage}</p>}
    <input name="text" type="text" placeholder="Nome" required />
    <input name="email" type="email" placeholder="E-mail" required />
    <input name="text" type="text" placeholder="Endereço" required/>
    <input name="tel" type="tel"  placeholder="Telefone" required />
    <input name="password" type="password" placeholder="Senha" required/>
   <div className="modal__footer">
            <button type="submit" className="modal__button">Cadastrar</button>
            <p className="modal__switch-text">
              ou <span onClick={switchToLogin}>Conectar</span>
            </p>
          </div>
    </form> 
</Modal>

<Modal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} title="Sucesso!">
    <p className="modal__message">Cadastro concluído com sucesso! 🐾</p>
    <button className="modal__button modal__button--center" onClick={() => setIsSuccessOpen(false)}>Ok</button>
</Modal>
        </main>
    );
}
           
export default Main;


    