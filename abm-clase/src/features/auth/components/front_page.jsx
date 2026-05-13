import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../../app/router/routes";

export default function FrontPage(){
    
    const navigate = useNavigate();

    function handleLogin(){
        navigate(ROUTES.HOME)
    }



    return(
        <form className="form-log">
            <h2 className="Text-log" > Inicia sesión </h2>
            <input type="text" placeholder="Usuario..." />
            <input type="text" placeholder="Contraseña..." />

            <button onClick={handleLogin}>
                Entrar 
            </button>
        </form>
    );
}       