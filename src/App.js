import { GlobalStyles } from "./componentes/estilos/globalStyles";
import "./componentes/estilos/estilos.css";
import { Home } from "./componentes/Home/Home";
import { Pokedex } from "./componentes/Pokedex/Pokedex";

function App() {
  return (
    <div className="appTo-Do">
      <GlobalStyles>
        <Home />
        <Pokedex />
      </GlobalStyles>
    </div>
  );
}

export default App;
