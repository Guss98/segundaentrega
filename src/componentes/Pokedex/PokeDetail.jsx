import React from "react";

const PokeDetail = (props) => {
  return (
    <div className="wrapper">
      <article className="cardPoke">
        <img
          src="https://previews.123rf.com/images/kebox/kebox1712/kebox171200205/92445493-zig-zag-pattern-background-blue-and-white.jpg"
          alt="imagen header card"
          className="card-header"
        />
        <div className="cardBody">
          <img
            className="card-body-image"
            src={props.image}
            alt={`Imagen de ${props.name}`}
          />
          <h1 className="card-body-name">{props.name}</h1>
          <h2 className="habilidadesTitulo">Habilidades</h2>
          <div className="card-footer">
            <div className="card-footer-social">
              <ul className="habilidades">
                {props.abilityNames.map((abilityName) => (
                  <li className="habilidad" key={abilityName}>
                    {abilityName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PokeDetail;
