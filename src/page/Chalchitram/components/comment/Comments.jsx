import React from 'react'
// import Comment from '../comment/Comment'
import './_comment.scss'
const Comments = () => {
   const handleComment = () => {}
   return (
      <div className='comments'>
         <p>1234 Comments</p>
         <div className='comments__form d-flex w-100 my-2'>
            <img
               src='assets/images/logo512.png'
               alt=''
               className='rounded-circle mr-3'
            />
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
               />
               <button className='border-0 p-2'>Comment</button>
            </form>
         </div>
         <div className='comments__list'>
          
         </div>
      </div>
   )
}

export default Comments