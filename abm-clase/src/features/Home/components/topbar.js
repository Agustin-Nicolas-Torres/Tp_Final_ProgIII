import "./topbar.css";
import { useEffect, useState } from "react";
import { dolarcripto } from "../services/Data";

export default function TopBar({ accessLogin, isAdmin = false }) {
  const [precio, setprecio] = useState(0);
  useEffect(() => {
    async function cargarprecio() {
      const valor = await dolarcripto();
      setprecio(valor);
    }
    cargarprecio();
  }, [])
  return (
    <div className="topbar">
      <div className="topbar-logo">Novatech</div>

      <button onClick={accessLogin} className="topbar-login-btn">
        {isAdmin ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
      <div className="Dato-Dolar">
        <div>
          Convercion usada: ${precio > 0 ? precio : 'Cargando...'} ARS = 1 USD
        </div>
      </div>
    </div>
  );
}
