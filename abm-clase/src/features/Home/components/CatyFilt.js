import React, { useEffect, useState } from "react";
import { ConseguirCategorias, ConseguirFiltros } from "../services/Data";
import "../page/catyfilt.css";

function obtenerTexto(item, fallback = "") {
  return item?.nombre || item?.name || item?.titulo || item?.title || item?.categoria || item?.valor || item?.filter || fallback;
}

export default function CatalogoyFiltos({ onFiltrar }) {
  const [categorias, setCategorias] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [categoriasAbiertas, setCategoriasAbiertas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState([]);

  useEffect(() => {
    async function cargarDatos() {
      try {
        const [categoriasData, filtrosData] = await Promise.all([
          ConseguirCategorias(),
          ConseguirFiltros(),
        ]);

        setCategorias(categoriasData);
        setFiltros(filtrosData);
      } catch (error) {
        console.error("Error al cargar categorías y filtros:", error);
      }
    }

    cargarDatos();
  }, []);

  useEffect(() => {
    if (onFiltrar) {
      onFiltrar(categoriaSeleccionada, filtrosSeleccionados);
    }
  }, [categoriaSeleccionada, filtrosSeleccionados, onFiltrar]);

  const manejarCheckboxPadre = (categoria) => {
    const categoriaId = categoria.id;
    const yaSeleccionada = categoriaSeleccionada === categoriaId;

    setCategoriaSeleccionada(yaSeleccionada ? null : categoriaId);

    setCategoriasAbiertas((prev) =>
      prev.includes(categoriaId)
        ? prev.filter((item) => item !== categoriaId)
        : [...prev, categoriaId]
    );
  };

  const manejarFiltro = (valorFiltro) => {
    setFiltrosSeleccionados((prev) =>
      prev.includes(valorFiltro)
        ? prev.filter((item) => item !== valorFiltro)
        : [...prev, valorFiltro]
    );
  };

  return (
    <div className="Categoria-filtros">
      <div className="filtros-header">
        <h3>Categorías y filtros</h3>
        <span>Explora por marca y características</span>
      </div>

      <div className="lista-categorias-contenedor">
        {categorias.map((item) => {
          const categoriaId = item.id;
          const nombreCategoria = obtenerTexto(item, "Categoría");
          const estaAbierta = categoriasAbiertas.includes(categoriaId);

          return (
            <div key={categoriaId} className="categoria-item">
              <label className={`categoria-toggle ${categoriaSeleccionada === categoriaId ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={categoriaSeleccionada === categoriaId}
                  onChange={() => manejarCheckboxPadre(item)}
                />
                <span>{nombreCategoria}</span>
              </label>

              <div className={`filtros-submenu ${estaAbierta ? "open" : ""}`}>
                {filtros.map((filtro, index) => {
                  const valorFiltro = obtenerTexto(filtro, `Filtro ${index + 1}`);
                  const estaSeleccionado = filtrosSeleccionados.includes(valorFiltro);

                  return (
                    <label key={`${categoriaId}-${valorFiltro}`} className={`filtro-option ${estaSeleccionado ? "selected" : ""}`}>
                      <input
                        type="checkbox"
                        checked={estaSeleccionado}
                        onChange={() => manejarFiltro(valorFiltro)}
                      />
                      <span>{valorFiltro}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}