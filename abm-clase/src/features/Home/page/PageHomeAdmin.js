import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Carrusel";
import ProductGrid from "../components/ProductGrid";
import CatalogoyFiltos from "../components/CatyFilt";
import TopBar from "../components/topbar";
import { ROUTES } from "../../../app/router/routes";
import "./PageHome.css";

export default function PageHomeAdmin() {
  const navigate = useNavigate();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);

  function cerrarSesion() {
    navigate(ROUTES.LOGIN);
  }

  return (
    <div>
      <TopBar accessLogin={cerrarSesion} isAdmin={true} />
      <div className="layout-principal">
        <div className="contenido">
          <Banner />
        </div>
        <div className="layourt-sec">
          <div className="productos">
            <ProductGrid
              isAdmin={true}
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
    </div>
  );
}
