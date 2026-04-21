import logo from "../../images/logo.png";
import NavBar from "../Navigation/Navigation";
import "../blocks/header.css";

function Header({ onLoginClick, onRegisterClick }) {
    return(
        <header className="header">
            <img
            src={logo}
            alt="imagem da logo"
            className= "header__logo"
            />
           <NavBar onLogin={onLoginClick} onRegister={onRegisterClick} />
        </header>
    );
}

export default Header;