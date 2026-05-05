import Banner from "./Componentes/Carrusel";
import CatalogoyFiltos from "./Componentes/CatyFilt"

function App() {
  return (
    <div className="layout-principal">
      <div className="contenido">
        <Banner />
      </div>
      <div className="filtros">
      
        <CatalogoyFiltos />
      </div>
    </div>
  );
}

export default App;
