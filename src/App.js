import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Button from "./Components/Button";
import {Route, Routes, Link} from 'react-router-dom';

function App() {

  const donateButton = {color: "black", text: "Donate Now"}


  return (
    <div className="App">
      <Header/>
      <Main/>
      <Button {...donateButton}/>
      <Footer/>
    </div>
  );

}

export default App;
