//import logo from './logo.svg';
import './App.css';
import General from './pages/general.js';
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
    </div>
  );
}

export default App;
