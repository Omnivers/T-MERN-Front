import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './Assets/Nav';
import NavGuest from './Assets/NavGuest';
import NavUser from './Assets/NavUser';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Notfound from './Pages/Notfound';
import Profil from './Pages/Profil';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Edit from './Pages/Edit'
import NewProduct from './Pages/NewProduct';
import { UserContextProvider,UserContext } from './contexts/User'
import { useContext } from 'react';

function App() {
  const { user, token } = useContext(UserContext)
  return (
    <BrowserRouter>
    <UserContextProvider>
      {user ?( 
        <NavUser />
      ):(
        <NavGuest />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/edit" element={<Edit />} />
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
