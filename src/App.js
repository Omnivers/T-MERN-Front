import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './Assets/Nav';
import Nav1 from './Assets/Nav1';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Notfound from './Pages/Notfound';
import Profil from './Pages/Profil';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { UserContextProvider} from './contexts/User'

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
        <Nav1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
