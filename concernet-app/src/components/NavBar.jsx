import { Link } from "react-router-dom";
import '../CSS/NavBar.css';
import { useAuth } from "./AuthProvider";

const NavBar = ()=>{
    const auth = useAuth();
    return(
        <div className="navBar">
            <nav>
                <ul>
                    <li className="principal"><Link to="/dashboard"><b>CONCERNET</b></Link></li>
                    <li className="opciones">
                        <Link to="/dashboard">Inicio</Link>
                    </li>
                    <li className="opciones">
                        <Link to="/espacios">Espacios</Link>
                    </li>
                    <li className="opciones">
                        <Link to="/viviendas">Viviendas</Link>
                    </li>
                    <li className="opciones">
                        <Link to="/about">Acerca de</Link>
                    </li>
                    <li id="cuenta" className="opciones">{auth.user}
                        <ul className="listaEscondida">
                            <li>
                                <Link to="/login">Cerrar sesión</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default NavBar;