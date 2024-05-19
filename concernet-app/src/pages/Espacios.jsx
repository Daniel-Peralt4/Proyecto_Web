import NavBar from "../components/NavBar";
import piscina from '../images/piscina.jpg';
import '../CSS/Espacios.css';

const Espacios = ()=>{
    return(
        <div className="espacio">
            <NavBar />
            <div className="contenedorEspacios">
                <img src={piscina} alt="Piscina"/>
            </div>
        </div>
    );
};
export default Espacios;