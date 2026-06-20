import "./front_page.css";
import { useRef } from "react";

export default function FrontPage({ user, setUser, onLogin }) {
  //Extrae las propiedades y las vuelve varaibles independientes
  const { username, password } = user;

  //Actualiza los datos del usuario sin elminar lo ya escrito
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const passwordRef = useRef(null);
  const handleKeyPassword = (e) => {
    if (e.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };

  return (
    <div className="page-center">
      <form className="form-log">
        <h2 className="Text-log"> Inicia sesión </h2>
        <input
          className="IMP-username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyDown={handleKeyPassword}
          placeholder="Usuario"
        />

        <input
          className="IMP-password"
          type="password"
          name="password"
          ref={passwordRef}
          value={password}
          onChange={handleChange}
          onKeyDown={handleKeyEnter}
          placeholder="Contraseña"
        />

        <button className="BTN-Entrar" type="button" onClick={onLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
}
