import './App.css';
import Navbar from './Components/NavBar/Navbar';
import AllRoutes from './Components/Login/AllRoutes';
import Footer from './Components/HomePage/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
