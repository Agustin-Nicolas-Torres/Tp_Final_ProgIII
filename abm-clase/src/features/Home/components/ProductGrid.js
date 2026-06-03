import { INITIAL_PRODUCTS } from "../services/Data";

import "./StyleProduct.css";

export default function ProductGrid() {
  
  return (
    <ul className="Grid-products">
      {INITIAL_PRODUCTS.map((prod) => (
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