import { Button } from 'antd';
import './Hero.css';
import StockTable from './StockTable';
const Hero = () => {
  return (
    <div className="container section">
      <div className="grid-container">
        <div className="left-box">
          <h1>Your Gateway to financial <span className="artsy-underline">freedom</span></h1>
          
          <p className="description">
          Invest smarter and trade with confidence on Mint, your platform for simplifying the stock market. Access real-time insights, secure tools, and grow your portfolio with ease.
          </p>
          <div className="button-group">
            <Button type="primary" size="large">
              Learn More
            </Button>
            <Button size="large">
              Join Now
            </Button>
          </div>
        </div>
        
        <div className="right-box">
          <div className="content-box">
            <StockTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;