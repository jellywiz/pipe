import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Slideshow from './components/Slideshow';

function App() {
  const images = [
    'https://picsum.photos/id/10/400/300',
    'https://picsum.photos/id/100/400/300',
    'https://picsum.photos/id/1000/400/300',
  ];
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Slideshow images={images} interval={3000} />
      <h1>nice</h1>
    </div>
  );
}

export default App;
