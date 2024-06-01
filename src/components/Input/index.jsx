const Input = ({ type = "text", id = "", placeholder = "" }) => {
  if (type == "textarea") {
    return (
      <textarea
        className={`form-input-textarea`}
        name={id}
        id={id}
        placeholder={placeholder}
      ></textarea>
    );
  }

  return (
    <input
      className={`form-input`}
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
