import './App.css';

import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Technologies } from './components/Technologies/Technologies';
import { Projects } from './components/Projects/Projects';
import { Form } from './components/Form/Form';
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />

      <div className='maindata Container'>
        <About />
        <Technologies />
        <Projects />
      </div>
      <div className='blackArea'>
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
