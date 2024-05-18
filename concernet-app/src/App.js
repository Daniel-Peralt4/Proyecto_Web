import {Routes, Route} from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Espacios from './pages/Espacios';
import Viviendas from './pages/Viviendas';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
          <Route path='/about' element={<About />}/>
          <Route path='/espacios' element={<Espacios />}/>
          <Route path='/viviendas' element={<Viviendas />}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
