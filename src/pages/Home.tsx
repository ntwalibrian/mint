import { Button, Input } from "antd";
import StockTable from "../components/StockTable";
import "./Home.css";
import { featuretext } from "../mocks/Data";
import FeatureCard from "../components/FeatureCard";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

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
          <h1 className="motivation-text">
            "No risk, no Ferrari." – A cautionary reminder from someone who
            ended up bankrupt.
          </h1>
          <Input placeholder="Enter your email" className="email-input" />
          <Button type="primary" className="join-now-button">
            Join Now
          </Button>
        </div>
        <StockTable />
      </div>
      <div className="flex flex-wrap justify-center items-center p-7">
        {featuretext.map((item, index) => (
          <FeatureCard key={index} title={item.title} desc={item.desc} />
        ))}
      </div>

      <Footer container className="p-0">
        <div className="w-full bg-black m-0">
          <div className="grid w-full justify-between sm:flex sm:justify-evenly md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-evenly pb-4" >
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Home;
