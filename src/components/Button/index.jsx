import { motion } from "framer-motion";
import ButtonStyles from "./style.module.css";

const Button = ({ type, children, variant = "yellow", className = "" }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      type={type}
      className={`
        ${ButtonStyles.button}
        ${ButtonStyles[`${variant}`]}
        ${className}
        w-[140px] text-sm
        sm:w-[150px]
        lg:w-[170px] lg:text-md
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;
