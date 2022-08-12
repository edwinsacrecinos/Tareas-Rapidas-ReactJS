import './App.css';
import imgLogo from '../src/images/logo.svg'
import ListaDeTareas from './components/ListaDeTareas';



function App() {





  return (
    <div className="contenedor-tareas">

        <div className="logo-contenedor">
          <img src={imgLogo} alt="Logo de tareas rápidas"  className='logo-tareas' />
        </div>

        <div className="tareas-lista-principal">
          <h1>Tareas Rápidas</h1>
          <ListaDeTareas/>          
        </div>

    </div>
  );
}

export default App;
