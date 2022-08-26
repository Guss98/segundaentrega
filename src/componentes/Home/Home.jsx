import React from "react";
import { GlobalStyles } from "../estilos/globalStyles";
import { NavBar } from "../NavBar/NavBar";
import "./HomeStyles.css";

export const Home = () => {
  return (
    <div className="cuerpo">
      <NavBar />
      <div>
        <h1>¿Que queres hacer hoy?</h1>
        <p className="pHome">Elegi entre tus tareas o los pokemons</p>
      </div>
      <GlobalStyles />
    </div>
  );
};
