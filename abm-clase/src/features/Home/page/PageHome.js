import { useState } from "react";
import Banner from "../components/Carrusel";
import ProductGrid from "../components/ProductGrid";
import InicialLog from "../hoocks/LogicLogin";
import "./PageHome.css";
import CatalogoyFiltos from "../components/CatyFilt";

export default function PageHome() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);

  return (
    <div className="layout-principal">
      <div className="contenido">
        <InicialLog />
        <Banner />
      </div>
      <div className="layourt-sec">
        <div className="productos">
          <ProductGrid
            categoriaId={categoriaSeleccionada}
            filtrosSeleccionados={filtrosSeleccionados}
          />
        </div>
        <div className="filtros">
          <CatalogoyFiltos
            onFiltrar={(categoriaId, filtros) => {
              setCategoriaSeleccionada(categoriaId);
              setFiltrosSeleccionados(filtros);
            }}
          />
        </div>
      </div>
    </div>
  );
}
