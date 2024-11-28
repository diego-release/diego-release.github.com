import React from 'react'
import { Link } from 'react-router-dom'

export const UIInfo = () => {
   return (
      <div className=''>
         {/* <h5 className='text-secondary-variant'>Desarrollador de aplicaciones web y moviles</h5> */}

         <div className="row mx-auto text-center">
            <div className="col-0 col-md-2"></div>
            <div className="col">
               <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/diego0at/"><img src="./assets/icons/linkedin.png" alt="linkedin" /></a>
            </div>
            <div className="col">
               <a rel="noreferrer" target="_blank" href="https://github.com/ideacodigo"><img src="./assets/icons/github.png" alt="github" /></a>
            </div>
            {/* <div className="col">
               <a rel="noreferrer" target="_blank" href="#footer"><img src="./assets/icons/medium.png" alt="medium" /></a>
            </div> */}
            <div className="col">
               <a rel="noreferrer" target="_blank" href="https://www.instagram.com/diego_release/"><img src="./assets/icons/instagram.png" alt="instagram" /></a>
            </div>
            <div className="col">
               <Link to={'/contact'}><img src="./assets/icons/email.png" alt="información contacto" /></Link>
            </div>
            <div className="col-0 col-md-2"></div>

         </div>
      </div>
   )
}
