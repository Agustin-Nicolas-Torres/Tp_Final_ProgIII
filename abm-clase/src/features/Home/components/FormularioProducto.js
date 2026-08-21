import { useState } from "react";
import "./StyleProduct.css";

export default function FormularioProducto({ onGuardar, onCancelar }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imagen_url: "", 
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    onGuardar(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="card-large-presentation">
        <h2 className="form-title">Nuevo Producto</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="image-placeholder-large">
            {formData.imagen_url ? (
              <img 
                className="IMG-product img-large" 
                src={formData.imagen_url} 
                alt="Vista previa de la imagen" 
                onError={(e) => {
                  
                  e.target.src = "/nullimage.png"; 
                }}
              />
            ) : (
              <div className="no-image-box">Vista previa de la imagen</div>
            )}
          </div>

          <div className="inputs-wrapper">
            <label>Ruta de la imagen (debe estar en la carpeta public):</label>
            <input
              type="text"
              name="imagen_url"
              placeholder="Ej: /Galaxy-A54.png o /banner.jpg"
              value={formData.imagen_url}
              onChange={handleChange}
            />

            <label>Nombre del Producto:</label>
            <input
              type="text"
              name="name"
              placeholder="Ej. iPhone 14 Pro MAX"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Precio:</label>
            <div className="fila-especial">
              <input className="input-price"
                type="number"
                name="price"
                placeholder="Ej. 900.00"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <label>ARS:</label>
              <label class="switch">
                <input className="input-conv"
                type="checkbox"/>
                <span class="slider round"></span>
              </label>
            </div>


            <label>Descripción:</label>
            <textarea
              name="descripcion"
              placeholder="Escribe los detalles del producto..."
              value={formData.descripcion}
              onChange={handleChange}
              rows="3"
              className="textarea-description"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="menu-item btn-success">Guardar Producto</button>
            <button type="button" className="menu-item btn-danger" onClick={onCancelar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}