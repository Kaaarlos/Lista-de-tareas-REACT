import './App.css';
import logo from '../src/img/red.png';
import ListaTareas from '../src/componentes/ListaTareas'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="aplicacion-logo">
        <img 
        src={logo} 
        className='red-logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
