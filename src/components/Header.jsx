import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div>
           <header>
                    {/*NAVBAR -->*/}
                <nav class="navbar navbar-expand-lg border-bottom">
                    <div class="container">
                        <!-- Logo -->
                        <a href="/">
                            <img src="./assets/documents/Logo.png" alt="Logo" class="left">
                        </a>
                    
                    {/*Burger*/}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                    <!-- Menu -->
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto me-3">
                                <li class="nav-item"><a class="nav-link" href="#">Bâtiment</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Fabrication</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Alimentation</a></li>
                            </ul>

                        <!-- Recherche-->
                            <form class="d-flex">
                                <input class="form-control form-control-sm" type="search" placeholder="Rechercher...">
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;