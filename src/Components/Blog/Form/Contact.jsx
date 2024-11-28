export const BodyContact = () => {
   return (
      <div id="contacto" className="text-primary-variant text-center my-5">
         <div className="row">
            <div className="col"></div>
            <div className="col-12 col-lg-6">
               <h3 className="border-bottom pb-2 fw">Contacto</h3>
               <p className='text-dark text-start font-body'>
                  Si te gustan las aportes, quieres contribuir o eres de parte de una empresa y quieres ver como podemos colaborar escríbeme acá abajo para que nos pongamos en contacto.
               </p>
               <form className=" ">
                  <div className="text-start mb-3">

                     <label htmlFor="BodyContactEmail" className="form-label">Nombre</label>
                     <input className="form-control mb-3" type="text" placeholder="" name="BodyContactName" />

                     <label htmlFor="BodyContactEmail" className="form-label">Correo electronico</label>
                     <input className="form-control mb-3" id="BodyContactEmail" type="email" placeholder="" name="Email" />

                     <label className="form-label" htmlFor="contacto-mensaje">Mensaje</label>
                     <textarea className='form-control'>

                     </textarea>

                  </div>
                  <button className="btn btn-secondary mb-4 w-100">ENVIAR</button>
               </form>

               
            </div>
            <div className="col"></div>
         </div>

      </div>
   )
}
