import './App.css';
import NavBar from "./components/NavBar";

const misEstilos = {
  color: "#f8f316",
}

function App() {
const title = "Enchulate";
  return ( 
    <>
    <div className="App">
      <header className="App-header">
        <nav><NavBar/></nav>
        <h1 style={misEstilos}>{title}</h1>
      </header>
    </div>
    </>
  );
}
export default App;
