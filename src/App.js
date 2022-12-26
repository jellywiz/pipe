import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Slideshow from './components/Slideshow';
import Gallery from './components/Gallery';

function App() {
  // const images = [
  //   'https://picsum.photos/id/10/400/300',
  //   'https://picsum.photos/id/100/400/300',
  //   'https://picsum.photos/id/1000/400/300',
  // ];
  const galImage = [
    {
      key: 1,
      src: 'https://picsum.photos/id/10/400/300',
      alt: 'image 1',
      title: 'Image 1',
      description: 'This is image 1',
    },
    {
      key: 2,
      src: 'https://picsum.photos/id/100/400/300',
      alt: 'image 2',
      title: 'Image 2',
      description: 'This is image 2',
    },
    {
      key: 3,
      src: 'https://picsum.photos/id/1000/400/300',
      alt: 'image 3',
      title: 'Image 3',
      description: 'This is image 3',
    },
    {
      key: 4,
      src: 'https://picsum.photos/id/10/400/300',
      alt: 'image 4',
      title: 'Image 4',
      description: 'This is image 4',
    },
    {
      key: 5,
      src: 'https://picsum.photos/id/100/400/300',
      alt: 'image 5',
      title: 'Image 5',
      description: 'This is image 5',
    },
    {
      key: 6,
      src: 'https://picsum.photos/id/1000/400/300',
      alt: 'image 6',
      title: 'Image 6',
      description: 'This is image 6',
    },
    {
      key: 7,
      src: 'https://picsum.photos/id/10/400/300',
      alt: 'image 7',
      title: 'Image 7',
      description: 'This is image 7',
    },
    {
      key: 8,
      src: 'https://picsum.photos/id/100/400/300',
      alt: 'image 8',
      title: 'Image 8',
      description: 'This is image 8',
    },
  ];
  return (
    <div className="App">
      <div className="top-header-nav">
        <Header />
        <Navbar />
      </div>
      <About />
      <Slideshow images={galImage} interval={3000} />
      <Gallery galImage={galImage} />
      <h1>nice</h1>
    </div>
  );
}

export default App;
