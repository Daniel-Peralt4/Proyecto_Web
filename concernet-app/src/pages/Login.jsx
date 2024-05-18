import { useState } from "react";
import { useAuth } from "../components/AuthProvider";
import 'animate.css';
import '../CSS/Login.css';
import '../images/imagenPrincipal.jpg';

const Login = ()=>{
    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    const [mensaje, setMensaje] = useState("");

    const auth = useAuth();
    const handleSubmitEvent = (e) =>{
        e.preventDefault();
        if(input.username !== "" && input.password !==""){
            try{
                auth.loginAction(input);
            }catch(error){
                setMensaje(error.message);
            }
            return;
        }
        alert("Usuario y contraseña son obligatorios");
    };
    const handleInput = (e) =>{
        const {name, value} = e.target;
        setInput((prev) =>({...prev, [name]: value,}));
    };
    return(
        <>
            <div style={{ color: 'red' }}>{mensaje}</div>
                <div id="body">
                    <div  className="animate__animated animate__fadeInUp">
                        <div className="contenedor">
                            <form onSubmit={handleSubmitEvent}>
                                <h1 className="titulo">CONCERNET</h1>
                                <div className="form_control">
                                    <label htmlFor="user-name"></label>
                                    <input type="text" id="user-name" name="username" aria-describedby="user-name"
                                        aria-invalid="false" onChange={handleInput} placeholder="Usuario"/>
                                    <div id="user-name" className="sr-only">
                                        Por favor ingresar un nombre de usuario válido (mínimo 6 caracteres).
                                    </div>
                                </div>
                                <br></br>
                                <div className="form_control">
                                    <label htmlFor="password"></label>
                                    <input type="password" id="password" name="password" aria-describedby="user-password"
                                        onChange={handleInput} placeholder="Contraseña"/>
                                    <div id="user-password" className="sr-only">
                                        Por favor ingresar una contraseña válida (mínimo 6 caracteres).
                                    </div>
                                </div>
                                <br></br>
                                <button className="btn-submit">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
};
export default Login;