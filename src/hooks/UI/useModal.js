import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from 'react';

export const useModal = () => {

   const [modals, setModals] = useState({ modal: null })

   const { modal } = modals;

   useEffect(() => {

      const prepareModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
         keyboard: false
      })

      setModals(
         {
            modal: prepareModal
         }
      )

      // setTimeout(() => {
      //    prepareModal.show();
      // }, 2000)

   }, [])

   const handleShow = () => {
      modal.show();
   }

   return {handleShow}
}
