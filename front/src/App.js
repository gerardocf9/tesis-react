//import logo from './logo.svg';
import General from './pages/general.js';
import Exhaustiva from './pages/exhaustiva.js';
import Especifica from './pages/especifica.js';
import data from './data/dataSensores.js'
import listMotores from './data/listaMotores.js'
import App2 from './pages/pruebas_estaticas.js'

function onEveryTick(fn, tick) {
  // Time to next tick
  let getTick = () => tick - (Date.now() % tick);
  // Currie function to sequentially call itself
  let f = () => {
    fn();
    setTimeout(f, getTick());
  }
  // First call after required lag
  setTimeout(f, getTick());
}
/*
        <p>aa</p>
        <p>ba</p>
*/

function App() {
// Call on 30 second reload page
//onEveryTick(() =>window.location.reload(true) , 3e4);
  return (
    <div >
        <App2/>
    </div>
  );
}

export default App;
