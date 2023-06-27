import './App.css';
import Cabecera from './componentes/cabecera.js';
import Menu from './componentes/menu.js';
import Contenido from './componentes/contenido.js';
import Lateral from './componentes/lateral.js';
import Pie from './componentes/pie.js';

function App() {
  return (
    <div className="App">

      <div className='cabecera'>
        <Cabecera titulo="GOAT BURGER" />
      </div>

      <div className='menu'>
        <Menu />
      </div>
      
      <div className='contenido'>
        <Contenido />
      </div>

      <div className='lateral'>
        <Lateral />
      </div>
      
      <div className='pie'>
        <Pie />
      </div>

    </div>
  );
}

export default App;