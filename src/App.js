import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="top-header-nav">
        <Header />
        <Navbar />
      </div>
      <About />
      <Slideshow images />
      <Footer />
    </div>
  );
}

export default App;
