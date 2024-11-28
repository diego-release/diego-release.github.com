import React from 'react'

export const BlogFormSubscribe = () => {
   return (
      <div>
         <form className="pt-4">
            <p className='text-secondary-variant'>Suscríbete para notificarte de notas que te interesen</p>
            <div className="text-start mb-3">
               <input className="form-control mb-3" id="BodyContactEmail" type="email" placeholder="Ingresa tu correo" name="Email" />
            </div>
            <button className="btn btn-secondary mb-4 w-100">SUSCRIBIRME</button>
         </form>
      </div>
   )
}
