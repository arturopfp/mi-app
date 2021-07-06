import './App.css';
import NavBar from './components/Navbar/NavBar';
import Card from './components/Card/Card'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <Card />
      </div>  
    </div>
  );
}

export default App;
