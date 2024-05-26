import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const socialLinks = [
  <FaFacebook size={"40"} />,
  <FaInstagram size={"40"} />,
  <FaTwitter size={"40"} />,
  <FaYoutube size={"40"} />,
  <FaGoogle size={"40"} />,
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-8">
      {socialLinks.map((icon, id) => (
        <li
          key={id}
          className="text-[#583B00] p-4 bg-brown-200 rounded-12 cursor-pointer transition-colors hover:text-yellow-100"
        >
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
