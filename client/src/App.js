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
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [menu,setmenu]=useState();
  useEffect(() =>{
    axios.get('http://localhost:8080')
    .then(res => setmenu(res.data))
    .catch(err => console.log(err));
  });
  return (
   <>
    <Router>
      <Landing/>
      <Routes>
      <Route  path="/" element={<Maincontent/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/signup" element={<Signup/>} />

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
