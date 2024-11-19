import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import FAQs from './components/FAQs';
import BlogSection from './components/BlogSection';
import Newsletter from './components/Newsletter';
import { CustomFooter } from './components/Footer';
import './styles/global.css'; // Import global styles

function App() {
  return (
    <div>
      <Navbar />
      <Element name="hero" className="element section">
        <Hero />
      </Element>
      <Element name="features" className="element section">
        <FeatureSection />
      </Element>
      <Element name="faqs" className="element section">
        <FAQs />
      </Element>
      <Element name="blog" className="element section">
        <BlogSection />
      </Element>
      <Element name="newsletter" className="element section">
        <Newsletter />
      </Element>
      <CustomFooter/>
    </div>
  );
}

export default App;
