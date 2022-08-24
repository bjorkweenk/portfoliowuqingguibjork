import './App.css';

/*router dom*/
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

/*import pages */
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Splash from './components/Splash/Splash';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="work" element={<Work />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>
          <div className="list">
            <ul>
              <li><Link to="/">splash</Link></li>
              <li><Link to="home">home</Link></li>
              <li><Link to="work">work</Link></li>
              <li><Link to="contact">contact</Link></li>
            </ul>
          </div>
        </Router>
      </div>


    </>
  );
}

export default App;
