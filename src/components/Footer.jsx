import React from "react";
import ./footer.css;
import { Link, NavLink } from "react-router-dom";




const Accueil = () => {
    return(
        <div>
          <footer class="text-white mt-5 pt-4 pb-3">
                <div class="container d-flex justify-content-between">
                    <div>
                        <p class="mb-1">Mentions légales</p>
                        <p class="mb-1">Données personnelles</p>
                    </div> 
                    <div>
                        <p class="mb-1">Accessibilité</p>
                        <p>Cookies</p>
                    </div>
                    <div>
                        <p class="mb-1">101 cours Charlemagne</p>
                        <p class="mb-1">CS 20033</p>
                        <p class="mb-1">69269 LYON CEDEX 02</p>
                        <p>FRANCE</p>
                    </div>
                    <div>
                        <p class="mb-1">+33 (0)4 28 75 40 00</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Accueil;
