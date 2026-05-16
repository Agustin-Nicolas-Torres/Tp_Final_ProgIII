import './front_page.css';


export default function FrontPage({user, setUser, onLogin}){

    //Extrae las propiedades y las vuelve varaibles independientes 
    const {username, password} = user;

    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    
    return(
        <div className="page-center">
            <form className="form-log" onSubmit={(e) => e.preventDefault()}>
                <h2 className="Text-log" > Inicia sesión </h2>
                <input type="text" 
                    name='username' 
                    value={username} 
                    onChange={handleChange}
                    placeholder="Usuario" 
                />

                <input type="password" 
                    name='password' 
                    value={password}
                    onChange={handleChange}
                    placeholder="Contraseña" 
                />

                <button type='button' onClick={onLogin}>
                    Entrar 
                </button>
            </form>
        </div>
    );
}       