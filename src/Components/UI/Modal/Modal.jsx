export const UIModal = () => {

   return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Estamos trabajando en ello</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body text-primary">
                  Nos alegra que estés interesado, estamos trabajando en algunas actualizaciones,

                  <span className="text-primary-variant pt-2 ">
                     no olvides suscribirte para notificarte de las nuevas actualizaciones

                  </span>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                  <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={() => window.location = "/contact"}>Notificarme</button>
               </div>
            </div>
         </div>
      </div>
   )
}
