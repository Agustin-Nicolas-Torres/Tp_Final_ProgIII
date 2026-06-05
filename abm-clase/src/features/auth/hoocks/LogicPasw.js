import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/router/routes";
import FrontPage from "../components/front_page";
import { useState } from "react";

export default function AuthLog() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function Login() {
    if (user.username === "admin" && user.password === "admin") {
      navigate(ROUTES.HOMEADMIN);
    } else {
      alert("Usuario o Contraseña INCORRECTOS");
    }
  }

  return <FrontPage user={user} setUser={setUser} onLogin={Login} />;
}
