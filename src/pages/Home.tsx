import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FAQs from "../components/FAQs";
import Newsletter from "../components/Newsletter";
import FeatureSection from "../components/FeatureSection";
import { CustomFooter } from "../components/Footer";
import FeatCard from "../components/BlogSection";
import SignUp from "./Signup";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <FAQs />
      <FeatCard />
      <Newsletter />
      <CustomFooter />
      <SignUp/>
    </>
  );
};
export default Home;
