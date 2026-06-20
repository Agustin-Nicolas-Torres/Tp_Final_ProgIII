import "../page/catyfilt.css";

export default function CatalogoyFiltos() {
  const marcas = ["Samsung", "Apple", "Xiaomi", "Motorola"];
  const accesorios = ["Auriculares", "Cargadores", "Fundas", "Smartwatch"];

  return (
    <div className="Categoria-filtros">
      <h3>Categorías y filtros</h3>

      <details>
        <summary>Marcas</summary>

        {marcas.map((marca) => (
          <div key={marca}>
            <label>
              <input type="checkbox" />
              {marca}
            </label>
          </div>
        ))}
      </details>

      <details>
        <summary>Accesorios</summary>

        {accesorios.map((accesorio) => (
          <div key={accesorio}>
            <label>
              <input type="checkbox" />
              {accesorio}
            </label>
          </div>
        ))}
      </details>
    </div>
  );
}