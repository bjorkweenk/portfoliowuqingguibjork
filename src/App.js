import './App.css';
import { useState } from 'react';

/*router dom*/
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"

/*import pages */

import AppRoutes from './routes/AppRoutes';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';



function App() {


const [showScroll, setShowScroll] = useState(false)
const checkScrollTop = () => {    
   if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)    
   }  
};
window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <div className="App">
          <AppRoutes/>
      </div>


    </>
  );
}

export default App;
