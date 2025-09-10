import React from "react";
import {Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil";
import Erreur from "./pages/Erreur";
import Liste from "./pages/Liste";
import FicheArtisan from "./pages/FicheArtisan";

export default function App() {
  return(
    <div className="App">
         <nav>
          <Link to="/">Accueil</Link>
          <Link to="/erreur">Erreur</Link>
          <Link to="/FicheArtisan">FicheArtisan</Link>
          <Link to="/Liste">Liste</Link>
        </nav>

        <Routes>
          <Route path="/" element= {<Accueil/>}></Route>
          <Route path="/erreur" element= {<Erreur/>}></Route>
          <Route path="/liste" element= {<Liste/>}></Route>
          <Route path="/ficheartisan" element= {<FicheArtisan/>}></Route>
        </Routes>
    </div>
  );
}

