import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";



const footerLinks = [
  { name: "home", route: "/" },
  { name: "contact", route: "/contact" },
  { name: "feed", route: "/feed" },
  { name: "sign in", route: "/sign/in" },
  { name: "sign up", route: "/sign/up" },
];

const Footer = () => {
  return (
    <footer className="bg-green-300">
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 py-12"
      >
        <SocialLinks />
        <ul className="flex justify-center gap-12">
          {footerLinks.map(({ name, route }, id) => (
            <li
              key={id}
              className="hover:underline cursor-pointer text-sm capitalize hover:text-white text-[#ffffffc1]"
            >
              <Link to={route}>{name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <p className="bg-green-200 sticky z-100 text-md text-center py-16">
        Copyright © 2024;{" "}
        <span className="text-red italic hover:underline cursor-pointer"><Link to={"https://www.github.com/david900jason"} target="_blank">Ahmed</Link></span> &{" "}
        <span className="text-red italic hover:underline cursor-pointer"><Link to={"https://github.com/mostafatamer11"} target="_blank">Mostafa</Link></span>
      </p>
    </footer>
  );
};

export default Footer;
