import React from 'react'

const Button = ({ className, children, outline = false, color }) => {
  switch (color) {
    case "green":
      color = "bg-green-100 text-white"
      break;

    case "yellow":
      color = "bg-yellow-100 text-black-100"
      break;

    case "brown":
      color = "bg-green-100 text-white"
      break;
  }

  console.log(color);

  return (
    <button className={`${className} border-none rounded-8 font-bold ${color}`} style={{
      width: "160px",
      height: "54px"
    }}>
      { children }
    </button>
  )
}

export default Button