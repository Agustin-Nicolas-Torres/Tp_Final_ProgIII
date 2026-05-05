import { INITIAL_PRODUCTS } from "./Data";
import "./StyleProduct.css";

export default function ProductGrid() {
  return (
    <section className="product-section">
      <div className="product-grid">
        {INITIAL_PRODUCTS.map((product) => (
          <article key={product.id} className="product-card">
            <img
              className="product-card__image"
              src={process.env.PUBLIC_URL + "/" + product.img}
              alt={product.name}
            />

            <div className="product-card__body">
              <p className="product-card__category">{product.category}</p>
              <h3 className="product-card__name">{product.name}</h3>
              <div className="product-card__rating">★★★★★</div>
              <p className="product-card__price">${product.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}