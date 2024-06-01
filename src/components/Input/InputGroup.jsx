
const InputGroup = ({ children, className }) => {
  return (
    <div className={`mb-6 gap-6 flex justify-center form-group ${className}`}>
      {children}
    </div>
  );
};

export default InputGroup;
