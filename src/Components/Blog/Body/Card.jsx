export const BlogBodyCard = ({ title, icon: Icon, description, porcentaje, projects={} }) => {
   
   return (
      <div className="col-12 col-md-3 mb-4">
         <div className="shadow border rounded-3 bg-secondary-variant" >
            <div className="p-3 text-dark text-center">
               
               <Icon size='4rem' color='black' />
               
               <h5 className="text-primary-variant fw-bolder text-start border-top pt-2 mt-3">{title}</h5>

               {/* { projects.length > 0 && projects.map(({key, name, url})=>(<div><a key={key} href={url} target="black" className="link-primary">{name}</a><br/></div>))} */}

               <p className="m-0 text-start font-body text-truncate-multiline">{description}</p>
               <div className="progress mt-2">
                  <div className={`progress-bar w-${porcentaje}`} role="progressbar" aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </div>
      </div>
   )
}
