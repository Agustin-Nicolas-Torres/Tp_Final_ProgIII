import Banner from "../components/Carrusel";
import ProductGrid from "../components/ProductGrid";
import InicialLog from "../hoocks/LogicLogin";
import "./PageHome.css";

export default function pagehome() {
  return (
    <div className="layout-principal">
      <div className="contenido">
        <InicialLog />
        <Banner />
        <ProductGrid />
      </div>
      <div className="filtros">
        <h3> Categorias y filtros</h3>
      </div>
    </div>
  );
}
