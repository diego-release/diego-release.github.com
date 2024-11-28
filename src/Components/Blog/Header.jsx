
import { UIInfo } from '../UI/Info';

export const BlogHeader = ({handleShow}) => {
   return (
      <div id="BodyHome" className="container-fluid bg-primary mt-4 mt-md-2">
         <div className="row animate__animated animate__slideInRight">

            <div className="col-12 text-secondary-variant h-auto h-md-0">
               <div className="row">
                  <div className="col-md-5"></div>
                  <div className="col-md-6 text-center text-md-start">
                     <h3>Notas de aprendizaje</h3>
                     <p className="text-secondary">Aprende y comparte experiencias</p>
                     {/* <a className='btn btn-secondary' onClick={handleShow}>Ver notas</a> */}
                  </div>
                  <div className="col"></div>
               </div>
            </div>

            <div className="col-12 text-decoration-line-through display-1 text-secondary pe-0 text-end" style={{ fontSize: "20vw", zIndex: -1 }}>
               oO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;
            </div>

            <div className="col-12 text-secondary h-auto h-md-0">
               <div className="row">

                  <div className="col-0 col-md-5 text-center">
                     <UIInfo />
                  </div>

                  {/* <div className="col-12 col-md-5 text-center fs-4 text-md-start position-relative top-0 top-md-m20vh">
                     <BlogFormSubscribe />
                  </div> */}

                  <div className="col"></div>

               </div>
            </div>

         </div>
      </div>
   )
}
