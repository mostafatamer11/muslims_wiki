import ButtonStyles from "./style.module.css";

const ButtonGroup = ({ children }) => {
  return <div className={ButtonStyles.buttonGroup}>{children}</div>;
};

export default ButtonGroup;
