//import logo from './logo.svg';
import General from './pages/general.js';
import Especifica from './pages/especifica.js';
import data from './data/dataSensores.js'
import listMotores from './data/listaMotores.js'

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

function App() {
// Call on 30 second reload page
//onEveryTick(() =>window.location.reload(true) , 3e4);
  return (
    <div className="App">
        <General data={data} ListMotores = {listMotores.IdMotor} />
        <p>aa</p>
        <Especifica data={data} idmotor="A2" grafica="logo192.png" />
    </div>
  );
}

export default App;
