import React from 'react'

const Overlay = ({ children, className }) => {
  return (
    <div className={`${className} absolute top-0 left-0 w-full h-full bg-black-100`}>
      {children}
    </div>
  )
}

export default Overlay