import React from 'react'
import Input from '../Input'

const CommentInput = () => {
  return (
    <form className='w-full relative'>
      <Input placeholder='اكتب تعليقك هنا' type='text' id='comment' />
      <button type="submit">
      <img className='send-button' src="/fluent_send-24-filled.png" alt="" />
      </button>
    </form>
  )
}

export default CommentInput