import { useAuth } from "../components/AuthProvider";
import NavBar from "../components/NavBar";

const Dashboard = () =>{
    const auth = useAuth();
    return(
        <div className="container">
            <div>
                <NavBar />
                <h1>{auth.user}</h1>
            </div>
        </div>
    );
};
export default Dashboard;