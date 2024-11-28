import React from 'react'
import { BlogBody } from '../../Components/Blog/Body/Body'
import { BlogHeader } from '../../Components/Blog/Header'
import { UIModal } from '../../Components/UI/Modal/Modal'
import { useModal } from '../../hooks/UI/useModal'

export const ScreenBlog = () => {

   const { handleShow } = useModal();

   return (
      <>

         <UIModal />
      
         <div className='text-secondary'>

            <BlogHeader handleShow={handleShow} />
            <BlogBody />

         </div>
      </>
   )
}
