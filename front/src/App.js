//import logo from './logo.svg';
import './App.css';
import General from './pages/general.js';

import data from './data/dataSensores.js'

   //     <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <General data={data} />
    </div>
  );
}

export default App;
