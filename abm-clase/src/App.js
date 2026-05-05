import Banner from "./Componentes/Carrusel";
import ProductGrid from "./Componentes/ProductGrid";

function App() {
  return (
    <div className="layout-principal">
      <div className="contenido">
        <Banner />
        <ProductGrid />
      </div>
      <div className="filtros">
        <h3> Categorias y filtros</h3>
      </div>
    </div>
  );
}

export default App;