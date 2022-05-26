import Main from "./Pages/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element={<Main/>}></Route>
        <Route path = '/about' element= {<About/>}></Route>
        <Route path = '/contact' element= {<Contact/>}></Route>
        <Route path = '/donate' element= {<Donate/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );

}

export default App;
