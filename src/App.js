import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
// import Flag from './ProjectList/GameOfFlags/Flag';
import Footer from './Components/Footer'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import GoogleTranslate from './ProjectList/GoogleTranslator/GoogleTranslate';
// import ChappApp from './ProjectList/ChatApplication/ChappApp';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
        {/* <Route path="flag" element={<Flag />} /> */}
        <Route path="/" element={<GoogleTranslate />} />
        {/* <Route path="chappApp" element={<ChappApp />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
