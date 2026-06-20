import Banner from "../components/Carrusel";
import ProductGrid from "../components/ProductGrid";
import "./PageHome.css";

export default function PageHomeAdmin() {
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
