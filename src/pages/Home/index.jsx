import MainBackground from "/hero-banner.png";
import Overlay from "../../components/Overlay";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";
import Section from "./Section";
import { Link } from "react-router-dom";

const background = {
  backgroundImage: `url(${MainBackground})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

const Home = () => {
  return (
    <div>
      <main style={background} className="hero-section">
        <Overlay className={"flex flex-col justify-center items-center"}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-5px] text-yellow-100"
          >
            أهلا بكم في مسلم ويكي
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-sm lg:text-lg tracking-[-11%] mt-4"
          >
            أفضل مدونة في الوطن العربي
          </motion.p>
          <Button className="mt-8" variant={"green"}>
            <Link to={"/sign/in"}>ابدأ الان</Link>
          </Button>
        </Overlay>
      </main>

      <Section id={1} />

      <Section id={2} />

      <Section id={3} />

      <Footer />
    </div>
  );
};

export default Home;
