import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import FAQs from './components/FAQs';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Navbar from './components/Navbar';
import { CustomFooter } from './components/Footer';
import './styles/global.css';

// Create a HomePage component to contain the main landing page content
const HomePage = () => {
  return (
    <><Navbar/>
      <Element name="hero" className="element section">
        <Hero />
      </Element>
      <Element name="features" className="element section">
        <FeatureSection />
      </Element>
      <Element name="faqs" className="element section">
        <FAQs />
      </Element>
      
      
      <CustomFooter/>
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;