import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutMe from './pages/AbouteMe'
import Contact from './pages/Contact'
import Project from './pages/Projects'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About-Me' element={<AboutMe/>}/>
      <Route path='/Projects' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
