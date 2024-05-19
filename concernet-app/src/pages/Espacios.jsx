import NavBar from "../components/NavBar";
import piscina from '../images/piscina.jpg';
import cancha from '../images/cancha.jpg';
import '../CSS/Espacios.css';

const Espacios = ()=>{
    return(
        <div className="espacio">
            <NavBar />
            <div className="contenedorEspacios">
                <img src={piscina} alt="Piscina" title="PISCINA"/>
                <img src={cancha} alt="Cancha" title="CANCHA"/>
            </div>
        </div>
    );
};
export default Espacios;