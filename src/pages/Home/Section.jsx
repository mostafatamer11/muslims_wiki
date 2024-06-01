import CTA from "./CTA";
import About from "./About";
import Offers from "./Offers";

const Section = ({ id }) => {
  if (id == 1) {
    return (
      <About />
    );
  } else if (id == 2) {
    return (
      <CTA />
    );
  } else if (id == 3) {
    return (
      <Offers />
    );
  }
};

export default Section;
