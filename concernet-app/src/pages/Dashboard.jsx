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
                    <img src={piscinaPrincipal} alt="PiscinaInicio"/>
                    <span>
                        Dentro de los espacios comunitarios contamos con una pisicina en donde 
                        las personas pueden acceder a ella los fines de semana
                    </span>
                </div>
                <h3 className="subViviendas">Viviendas</h3>
                <div className="viviendaContexto">
                    <span>
                        Además contamos con una cancha de futbol en donde las personas pueden 
                        recrearse a cualquier hora, sin olvidar que es para todos
                    </span>
                    <img src={viviendaPrincipal} alt="CanchaInicio"/>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;