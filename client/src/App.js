import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import Landing from './components/Landing';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
//import Login from './pages/Login';
import Signup from "./pages/Signup"
import Menu from './pages/menu';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import Header from './components/Header';


function App() {

  
  return (
   <>
    <Router>
      {/* <Landing/> */}
      <Header/>
      <Routes>
      <Route  path="/" element={<Maincontent/>} />
      {/* <Route  path="/login" element={<Login/>} /> */}
      {/* <Route  path="/signup" element={<Signup/>} /> */}
      <Route  path="/RegisterScreen" element={<RegisterScreen/>} />
      <Route  path="/login" element={<LoginScreen/>} />
      {/* <Route path="/menu" render={() => <Menu menuitems={menuitems}/>} /> */}
      <Route path="/menu" element={<Menu/>}/>
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
