import NavBar from "../components/NavBar";
import '../CSS/About.css';

const About = ()=>{
    return(
        <div className="about">
            <NavBar/>
            <div className="contenedorAbout">
                <h2>MISION</h2>
                <p>Empoderar a las comunidades para que prosperen a través de soluciones de gestión
                     innovadoras y eficientes, fomentando un sentido de pertenencia, seguridad
                      y bienestar para todos los residentes.</p>
                <h2>VISION</h2>
                <p>Ser el proveedor líder de soluciones inteligentes de gestión comunitaria, 
                    transformando las comunidades cerradas en vibrantes centros de conexión, 
                    colaboración y prosperidad compartida.</p>
            </div>
        </div>

    );
};
export default About;