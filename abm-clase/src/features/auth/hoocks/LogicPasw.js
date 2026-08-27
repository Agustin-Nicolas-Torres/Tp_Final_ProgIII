import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/router/routes";
import FrontPage from "../components/front_page";
import { useState } from "react";
import { userList } from "../services/DataLog";

export default function AuthLog() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  function Login() {
    const usuarioValido = userList.find(
      (u) => u.nameuser === user.username && u.password === user.password
    );

    //Falta determinar que el dispositivo no tenga mas de 4 intentos de inicio de secion generando un bloqueo de 10 min

    if (usuarioValido) {
      navigate(ROUTES.HOMEADMIN);
    } else {
      alert("Usuario o Contraseña INCORRECTOS");
    }
  }

  return <FrontPage user={user} setUser={setUser} onLogin={Login} />;
}
