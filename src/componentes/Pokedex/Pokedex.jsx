import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./PokedexStyles.css";
import PokeDetail from "./PokeDetail";
import { GlobalStyles } from "../estilos/globalStyles";

export const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const ejecutarBusqueda = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        alert("Pokemon no encontrado");
      });
  };
  const cambiarState = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="pokedex">
      <NavBar />
      <form className="form" onSubmit={ejecutarBusqueda}>
        <input
          type="text"
          placeholder="Buscar Pokemon"
          className="inputForm"
          onChange={cambiarState}
        />

        <button className="botonInput" type="submit">
          Buscar
        </button>
      </form>

      <div className="resultado">
        {pokemon && (
          <PokeDetail
            name={pokemon.name}
            abilityNames={pokemon.abilities.map(
              (ability) => ability.ability.name
            )}
            image={pokemon.sprites.front_default}
          />
        )}
      </div>
      <GlobalStyles />
    </div>
  );
};
