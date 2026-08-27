import { Conseguirproductos, eliminarProducto as eliminarProductoApi, agregarProductoApi } from "../services/Data";
import { useEffect, useState } from "react";
import FormularioProducto from "./FormularioProducto";
import "./StyleProduct.css";

export default function ProductGrid({ isAdmin = false, categoriaId = null, filtrosSeleccionados = [] }) {
  const [productos, setproductos] = useState([]);
  const [menuAbiertoId, setMenuAbiertoId] = useState(null);
  const [menuGeneralAbierto, setMenuGeneralAbierto] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    async function cargarproductos() {
      try {
        const datos = await Conseguirproductos(categoriaId, filtrosSeleccionados);
        setproductos(datos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    }

    cargarproductos();
  }, [categoriaId, filtrosSeleccionados]);

  function toggleMenu(id) {
    setMenuAbiertoId((prevId) => (prevId === id ? null : id));
  }

  async function handleEliminar(id) {
    try {
      await eliminarProductoApi(id);
      setproductos((prev) => prev.filter((prod) => prod.id !== id));
      if (menuAbiertoId === id) {
        setMenuAbiertoId(null);
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert("No se pudo eliminar el producto");
    }
  }

  async function handleGuardarNuevoProducto(nuevoProductoData) {
    try {
      const productoGuardado = await agregarProductoApi(nuevoProductoData);
      setproductos((prev) => [...prev, productoGuardado]);
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      alert(error.message);
    }
  }

  function handleEditar(id) {
    console.log("Editar producto:", id);
    alert(`Editar producto ${id}. Implementa aquí la lógica de edición.`);
  }

  return (
    <div className="products-wrapper">
      {isAdmin && (
        <div className="products-side-action">
          <button
            type="button"
            className="menu-button add-global-button"
            onClick={() => setMenuGeneralAbierto((prev) => !prev)}
          >
            +
          </button>
          {menuGeneralAbierto && (
            <div className="menu-dropdown global-dropdown">
              <button
                type="button"
                className="menu-item"
                onClick={() => {
                  setMostrarFormulario(true);
                  setMenuGeneralAbierto(false);
                }}
              >
                Agregar producto
              </button>
            </div>
          )}
        </div>
      )}

      {mostrarFormulario && (
        <FormularioProducto
          onGuardar={handleGuardarNuevoProducto}
          onCancelar={() => setMostrarFormulario(false)}
        />
      )}

      <ul className="Grid-products">
        {productos.map((prod) => (
          <li key={prod.id} className="Cards-products">
            {isAdmin && (
              <div className="product-header">
                <div className="admin-actions">
                  <button
                    type="button"
                    className="menu-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleMenu(prod.id);
                    }}
                  >
                    ⋮
                  </button>
                  {menuAbiertoId === prod.id && (
                    <div className="menu-dropdown">
                      <button
                        type="button"
                        className="menu-item"
                        onClick={() => handleEditar(prod.id)}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="menu-item"
                        onClick={() => handleEliminar(prod.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            <img className="IMG-product" src={prod.imagen_url} alt={prod.name} />
            <div className="INFO-product">
              <h4 className="NAME-product">{prod.name}</h4>
              <h3 className="PRICE-product">{prod.price}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}