import { Link } from "react-router-dom";
import '../CSS/NavBar.css';

const NavBar = ()=>{
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
                    <li className="opciones">
                        <Link to="/login">Cerrar sesión</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default NavBar;