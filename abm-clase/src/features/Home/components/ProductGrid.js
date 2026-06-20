import { Conseguirproductos } from "../services/Data";
import { useEffect, useState } from "react";
import "./StyleProduct.css";

export default function ProductGrid() {

  const [productos, setproductos] = useState([]);

  useEffect(() => {
    async function cargarproductos() {
      try{
        const datos = await Conseguirproductos();
        setproductos(datos);
      }catch (error) {  
        console.error("Error al cargar los productos:", error);
      }
    }
     cargarproductos();
  }, [] )

  return (
    <ul className="Grid-products">
      {productos.map((prod) => (
        <li key={prod.id} className="Cards-products">
          <img className="IMG-product" src={prod.img} alt={prod.name}/>
          <div className="INFO-product">
            <h4 className="NAME-product">{prod.name}</h4>
            <h3 className="PRICE-product">{prod.price}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}