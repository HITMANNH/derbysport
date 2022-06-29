import Articlepage from "./containers/Articlepage";
import Effectif from "./containers/Effectif";
import Actialites from "./containers/Actialites";
import Partenaires from "./containers/Partenaires";
import Staff from "./containers/Staff";
import Videos from "./containers/Videos";
import Entrainnement from "./containers/Entrainnement"
import Organigram from "./containers/Organigram";
import Acceuil from "./containers/Acceuil";
import Test from "./containers/test";
import Contact from "./containers/Contact";
import Stadium from "./containers/Stadium";
import SingleGalery from "./components/SingleGalery";
import Produitderives from "./containers/Produitderives";
import Footer from "./containers/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";



function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
          <Routes>
            <Route path="/" element={< Acceuil />} />
            <Route path="/produitsderive" element={< Produitderives />} />
            <Route path="/actualite" element={< Actialites />} />
            <Route path="/galeries" element={<Articlepage />} />
            <Route path="/galerie/:id" element={<SingleGalery />} />
            <Route path="/stade" element={<Stadium />} />
            <Route path="/effectifs" element={<Effectif />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/organigram" element={<Organigram />} />
            <Route path="/historique" element={<Videos />} />
            <Route path="/entrainnement" element={<Entrainnement />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
