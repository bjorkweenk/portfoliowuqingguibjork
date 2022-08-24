import './App.css';

/*router dom*/
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

/*import pages */

import AppRoutes from './routes/AppRoutes';


import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <>
      <div className="App">
      
      <Navbar/>
          <AppRoutes/>
       <Footer/>
      </div>


    </>
  );
}

export default App;
