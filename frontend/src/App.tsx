import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import PaymentScreen from './Payment/Payment';
import Fulfillment from './Fulfillment/Fulfillment';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="grid-container">
        <title>Urban Storm</title>

        <div>
          <header className="header">
            <div className="brand">
              <button onClick={toggleMenu}>
                &#9776;
              </button>
              <a href="index.html">Urban Storm</a>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/fulfillment">Fulfillment</Link>
            </div>
          </header>

          <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <h3>Shopping Categories</h3>
            
            <ul>
              <li>
                <Link to="/catalog/shirts">Shirts</Link>
              </li>
              <li>
                <Link to="/catalog/pants">Pants</Link>
              </li>
            </ul>
          </aside>

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetail />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/fulfillment" element={<Fulfillment />} />
            </Routes>
          </main>

          <footer className="footer">
            &copy; 2024 Urban Storm
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
