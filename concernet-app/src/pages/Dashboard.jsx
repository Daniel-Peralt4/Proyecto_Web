import NavBar from "../components/NavBar";
import piscinaPrincipal from '../images/piscinaPrincipal.jpeg';
import viviendaPrincipal from '../images/viviendaPrincipal.webp';
import '../CSS/Dashboard.css';

const Dashboard = () =>{
    return(
        <div className="container">
            <NavBar />
            <div className="contenedorPrincipal">
                <h1>CONCERNET</h1>
                <hr></hr> 
                <p>Concernet es una aplicación web diseñada para gestionar y administrar conjuntos 
                    cerrados de manera eficiente y organizada</p>
                <br></br>
                <br></br>
                <h3 className="subEspacios">Espacions comunitarios</h3>
                <div className="piscinaContexto">
                    <img src={piscinaPrincipal} alt="PiscinaInicio" title="PISCINA"/>
                    <span>
                        Tendremos los espacios comunitarios que brinda el conjunto residencial hacia
                        las personas para que puedan recrearse, sin olvidar que somos una comunidad
                    </span>
                </div>
                <h3 className="subViviendas">Viviendas</h3>
                <div className="viviendaContexto">
                    <span>
                        Además contará con un apartado de viviendas para los propietarios que deseen
                        vender o arrendar su propiedad
                    </span>
                    <img src={viviendaPrincipal} alt="CanchaInicio" title="VIVIENDA"/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;