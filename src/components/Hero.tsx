import { Button } from 'antd';
import './Hero.css';
import StockTable from './StockTable';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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
            <ScrollLink to="features" smooth={true} duration={500}>
              <Button type="primary" size="large">
                Learn More
              </Button>
            </ScrollLink>
            <RouterLink to= "/signup">
            <Button size="large">
              Join Now
            </Button></RouterLink>
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