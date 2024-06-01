import React from 'react'

const ActivityBar = ({ elements }) => {
  return (
    <ul className='flex flex-col gap-4'>
      {
        elements.map((ele, idx) => (
          <ActivityBarItem key={idx} {...ele} />
        ))
      }
    </ul>
  )
}

const ActivityBarItem = ({ icon, text }) => {
  return (
    <li className='p-6 flex items-center gap-4 hover:text-yellow-100 transition-colors cursor-pointer'>
      {icon}
      <p>{text}</p>
    </li>
  )
}

export default ActivityBar