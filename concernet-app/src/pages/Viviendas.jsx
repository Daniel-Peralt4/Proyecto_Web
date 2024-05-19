import NavBar from "../components/NavBar";
import vivienda1 from '../images/vivienda1.jpg';
import vivienda2 from '../images/vivienda2.webp';
import vivienda3 from '../images/vivienda3.jpg';
import '../CSS/Viviendas.css';

const Viviendas = ()=>{
    return(
        <div className="viviendas">
            <NavBar/>
            <div className="contenedorViviendas">
                <img src={vivienda1} alt="Vivienda1"></img>
                <img src={vivienda2} alt="Vivienda2"></img>
                <img className="vivienda3" src={vivienda3} alt="Vivienda3"></img>
            </div>
        </div>
    );
};
export default Viviendas;