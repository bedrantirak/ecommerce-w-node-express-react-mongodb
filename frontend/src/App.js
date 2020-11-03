import React from 'react'
import './App.css';
import {BrowserRouter,Link,Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import SigninScreen from './screens/SigninScreen';


function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");

  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");

  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
    <div className="brand">
        <button onClick={openMenu}>
            &#9776;
        </button>
        <Link to="/">Cropturk</Link>
        
    </div>
    <div className="header-links">
        <a href="cart.html">Cart</a>
        <Link to="/signin" >Sign In</Link>
     
    </div>
 </header>
 <aside className="sidebar">
 <h3>Shopping Categories</h3>
 <button className="sidebar-close-button" onClick={closeMenu}>x</button>
 <ul>
     <li>
         <a href="index.html">Pants</a>
     </li>
     <li>
         <a href="index.html">Shirts</a>
     </li>
 </ul>
 </aside>
      <main className="main">
          <div className="content">
            <Route path="/sigin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?"  component={CartScreen} />
            <Route path="/" exact={true} component= {HomeScreen}/>
            
          </div>
         
      </main>
      <footer className="footer">
          All rights reserved. | By <a className="bedran" href="https://bedrantirak.github.io" > Bedran</a>
      </footer>
     </div>
     </BrowserRouter>
  );
}

export default App;
