import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContexts";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function App () {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const savedUser = localStorage.getItem("loggedInUser");
        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);
  
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header 
                    onLoginClick={() => setIsLoginOpen(true)} 
                    onRegisterClick={() => setIsRegisterOpen(true)} 
                /> 
                
                <Main 
                    isLoginOpen={isLoginOpen} 
                    setIsLoginOpen={setIsLoginOpen}
                    isRegisterOpen={isRegisterOpen} 
                    setIsRegisterOpen={setIsRegisterOpen}
                    isSuccessOpen={isSuccessOpen}
                    setIsSuccessOpen={setIsSuccessOpen}
                    setCurrentUser={setCurrentUser}
                /> 
                
                <Footer /> 
            </div>
        </CurrentUserContext.Provider> 
    );
}

export default App;