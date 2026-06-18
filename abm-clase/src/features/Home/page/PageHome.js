import Banner from "../components/Carrusel";
import ProductGrid from "../components/ProductGrid";
import InicialLog from "../hoocks/LogicLogin";
import "./PageHome.css";
import CatalogoyFiltos from "../components/CatyFilt";

export default function pagehome() {
  return (
    <div className="layout-principal">
      <div className="contenido">
        <InicialLog />
        <Banner />
        <ProductGrid />
      </div>
      <div className="filtros">
        <CatalogoyFiltos />
      </div>
    </div>
  );
}
