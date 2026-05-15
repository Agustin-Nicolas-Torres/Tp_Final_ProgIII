import { useNavigate } from "react-router-dom"
import './front_page.css';
import { ROUTES } from "../../../app/router/routes";

export default function FrontPage(){
    
    const navigate = useNavigate();

    function handleLogin(){
        navigate(ROUTES.HOME)
    }



    return(
        <div className="page-center">
            <form className="form-log">
                <h2 className="Text-log" > Inicia sesión </h2>
                <input type="text" placeholder="Usuario..." />
                <input type="text" placeholder="Contraseña..." />

                <button onClick={handleLogin}>
                    Entrar 
                </button>
            </form>
        </div>
    );
}       