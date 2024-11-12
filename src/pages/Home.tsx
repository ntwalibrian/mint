import React from 'react';
import { Button, Input } from 'antd';
import StockTable from '../components/StockTable';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-center">
          <a href="#stocks">Stocks</a>
          <a href="#why-us">Why Us</a>
        </div>
        <div className="navbar-right">
          <Button type="primary">Login</Button>
        </div>
      </nav>
      
      <div className="content-wrapper">
        <div className="left-container">
          <h1 className="motivation-text">"No risk, no Ferrari." – A cautionary reminder from someone who ended up bankrupt.</h1>
          <Input placeholder="Enter your email" className="email-input" />
          <Button type="primary" className="join-now-button">Join Now</Button>
        </div>
        <StockTable />
      </div>
    </div>
  );
}

export default Home;
