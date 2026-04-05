import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Navigation from "../Navigation/Navigation";

function App () {
    return (
        <div className="page">
         <Header></Header>  
         <Main></Main> 
         <Footer></Footer> 
         <About></About> 
         <Navigation></Navigation> 
        </div>
    );
}

export default App;

