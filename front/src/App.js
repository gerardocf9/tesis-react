//import logo from './logo.svg';
import General from './pages/general.js';
import Exhaustiva from './pages/exhaustiva.js';
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
/*
        <p>aa</p>
        <p>ba</p>
*/

function App() {
// Call on 30 second reload page
//onEveryTick(() =>window.location.reload(true) , 3e4);

    const [datos, setDatos] = useState({
        data:{posts : [
            {Data:[
                        {"Aceleracion":0.1, "IdSensorData":1,"VelocidadX":3.7477076723150793,"VelocidadY":1.199884729975562,"VelocidadZ":2.665819286207451},
        ]]},
    histograma:""
    });

   let getData = async () => {
        let response = await fetch('http://127.0.0.1:8000/get_especifica')
        let data = await response.json()
        setDatos(data)
    }
  useEffect(() => {
        getData()
  },[]);

  return (
    <div >
        <Especifica data={datos} idmotor="A2" grafica="histograma.png" />
    </div>
  );
}

export default App;
