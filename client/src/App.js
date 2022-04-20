import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import Landing from './components/Landing';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from "./pages/Signup"
import Menu from './pages/menu';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const[menuitems,setmenuitems]=useState([]);
  useEffect( () =>{
    const mydata= async()=>{
      await axios
      .get("http://localhost:5000/api/menu");
      axios.then(res => setmenuitems(res.json(mydata)))
      .catch(error => console.log(error))
    }
  });
  return (
   <>
    <Router>
      <Landing/>
      <Routes>
      <Route  path="/" element={<Maincontent/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/signup" element={<Signup/>} />
      <Route path="/menu" render={() => <Menu menuitems={menuitems}/>} />
      {/* <Route path="/menu" element={<Menu/>}/> */}
      </Routes>
      <Footer/>
    </Router>
    
    {/* <Landing/>
    <Maincontent/>
    <Footer/> */}
  
    
    </>
    
  );
}

export default App;
