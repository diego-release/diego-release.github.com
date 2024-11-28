import Swal from 'sweetalert2';


export const sendMessage = (name, email, message, resetValues) => {
   fetch("https://formsubmit.co/ajax/3dc8c0dce14bc26ff48b42a58d5a8415", {
      method: "POST",
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify({
         name: name,
         email: email,
         message: message
      })
   })
      .then(response => response.json())
      .then(data => {
         Swal.close();
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Mensaje enviado!',
            showConfirmButton: false,
            timer: 2000,
            showClass: {
               popup: 'animate__animated animate__fadeInDown'
            },
         })
         resetValues({ name: '', email: '', message: '' });
      })
      .catch(error => {
         Swal.close();
         Swal.fire({
            position: 'center',
            icon: 'error',
            title: '¡No fue posible enviar el mensaje!',
            showConfirmButton: false,
            timer: 2000,
            showClass: {
               popup: 'animate__animated animate__fadeInDown'
            },
         })
      });
}