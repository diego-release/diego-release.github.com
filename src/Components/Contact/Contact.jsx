import Swal from "sweetalert2";
import { sendMessage } from "../../api/SendMessage";
import { useForm } from "../../hooks/useForm";

export const Contact = () => {
   const initialState = { name: "", email: "", message: "" };

   const [{ name, email, message }, handleInputChangeSetValue, resetValues] =
      useForm(initialState);

   const handleSubmit = (e) => {
      e.preventDefault();

      Swal.fire({
         title: "Enviando",
         html: "Estamos enviando su mensaje.",
         allowOutsideClick: false,
         didOpen: () => {
            Swal.showLoading();
            sendMessage(name, email, message, resetValues);
         },
      });
   };

   return (
      <div
         id="contacto"
         className="container text-primary-variant my-3 pt-2 pb-4"
      >
         <div className="row mx-2 animate__animated animate__zoomIn bg-secondary-variant rounded rounded-3">
            <div className="col-sm-12 col-md-5 p-3">
               <div className=" rounded rounded-3 px-5 py-4 h-100">
                  <p className="text-dark text-end font-body ps-1 ">
                     Si te gustan las aportes, quieres contribuir o eres de
                     parte de una empresa y quieres ver como podemos colaborar,
                     escríbeme acá abajo para que nos pongamos en contacto
                  </p>
                  <h1 className="text-dark fw-bold text-uppercase text-end">
                     Contactarme
                  </h1>
               </div>
            </div>

            <div className="col-sm-12 col-md-7">
               <form
                  className="text-start m-5"
                  onSubmit={handleSubmit}
                  action=""
                  method="POST"
               >
                  {/* Honeypot */}
                  <input
                     type="text"
                     name="_honey"
                     style={{ display: "none" }}
                  ></input>

                  <label htmlFor="contact_name" className="form-label">
                     Nombre
                  </label>
                  <input
                     className="form-control mb-3"
                     name="name"
                     value={name}
                     id="contact_name"
                     onChange={handleInputChangeSetValue}
                     type="text"
                     required
                  />

                  <label htmlFor="contact_email" className="form-label">
                     Correo electrónico
                  </label>
                  <input
                     className="form-control mb-3"
                     name="email"
                     value={email}
                     onChange={handleInputChangeSetValue}
                     id="contact_email"
                     type="email"
                     required
                  />

                  <label className="form-label" htmlFor="contact_message">
                     Mensaje
                  </label>
                  <textarea
                     className="form-control mb-3"
                     name="message"
                     value={message}
                     onChange={handleInputChangeSetValue}
                     id="contact_message"
                     required
                  ></textarea>

                  <button
                     className="btn btn-secondary mb-4 w-100"
                     type="submit"
                  >
                     ENVIAR
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};
