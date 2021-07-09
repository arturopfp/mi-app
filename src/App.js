import './App.css';
import NavBar from './components/Navbar/NavBar';
import Contenedor from './components/Contenedor/Contenedor'
import Card from './components/Card/Card'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Contenedor>
        <Card></Card>
      </Contenedor>
    </div>
  );
}

export default App;
