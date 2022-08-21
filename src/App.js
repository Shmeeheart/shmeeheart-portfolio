import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';

function App() {
  const [pageState, setPageState] = useState('portfolio');
  return (
    <div className='App'>
      <Navbar pageState={pageState} setPageState={setPageState} />
      {pageState === 'about' ? (
        <About />
      ) : pageState === 'contact' ? (
        <Contact />
      ) : (
        <Portfolio />
      )}
    </div>
  );
}

export default App;
