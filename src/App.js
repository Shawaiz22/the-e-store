import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContext from './components/Context/CartContext';
import ItemContext from './components/Context/ItemContext';
import PlaceOrder from './components/PlaceOrder';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <CartContext>
    <ItemContext>
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/placeOrder' element={<PlaceOrder/>}></Route>
        <Route path='/searchResults' element={<SearchResults/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </ItemContext>
    </CartContext>
  );
}

export default App;
