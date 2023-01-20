// import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
