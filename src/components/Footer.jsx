import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  <FaFacebook size={"40"} />,
  <FaInstagram size={"40"} />,
  <FaTwitter size={"40"} />,
  <FaYoutube size={"40"} />,
  <FaGoogle size={"40"} />,
];

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
        <ul className="flex justify-center gap-8">
          {socialLinks.map((icon, id) => (
            <li
              key={id}
              className="text-[#583B00] p-4 bg-brown-200 rounded-12 hover:text-[#583b009e]"
            >
              {icon}
            </li>
          ))}
        </ul>
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
