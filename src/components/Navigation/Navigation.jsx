function NavBar({ onLogin, onRegister }) {
    return (
        <nav className="navigation" >
          <button className="navigation__button" onClick={onLogin} > 🐾 Conectar</button>
          <button className="navigation__button navigation__button" onClick={onRegister}> ✨ Inscreva-se</button>
          </nav>
    );
}

export default NavBar;