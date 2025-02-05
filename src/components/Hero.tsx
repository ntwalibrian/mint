import { Button } from "antd";
import "./Hero.css";
import CircularLogoAnimation from "./Circular-Try";

import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="container section">
      <div className="grid-container">
        <div className="left-box">
          <h1>Investing Made Easy</h1>

          <p className="description">
            Invest and trade stocks effortlessly with Mint, where security meets
            simplicity for a seamless trading experience.
          </p>
          <div className="button-group">
            <a
              href="https://mint-livid-omega.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" type="primary">
                Join Now
              </Button>
            </a>
            <ScrollLink to="features" smooth={true} duration={500}>
              <Button size="large">Learn More</Button>
            </ScrollLink>
          </div>
        </div>

        <div className="right-box">
          <CircularLogoAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
