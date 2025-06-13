import About from "../component/About";
import Footer from "../component/Footer";
import Herosection from "../component/Herosection";
import Services from "../component/Services";
import Stat from "../component/Stat";
import Testimonials from "../component/testimonials";
import { FloatButton } from "antd";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <About />
      <Services />
      <Stat />
      <Testimonials />
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default Homepage;
