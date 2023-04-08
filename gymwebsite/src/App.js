import './Styles/App.css';
import Header from './Header.js';
import Home from './Home.js';
import Display from './Display.js';
import Footer from './Footer.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/display' element={<Display/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
