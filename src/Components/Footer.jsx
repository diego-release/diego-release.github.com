export const Footer = () => {
   return (
      <div className="container-fluid bg-primary">
         <div className="row border-top pt-2 pt-4">
            <div className="col-12 col-lg-3">
               <h5 className="text-secondary">aStart</h5>
               <h6><span className="d-inline-block" style={{ width: "1rem" }}></span>scrum</h6>
               <h6><span className="d-inline-block" style={{ width: "2rem" }}></span>fullStack</h6>
               <h6><span className="d-inline-block" style={{ width: "3rem" }}></span>starUp</h6>
            </div>
            <div className="col-12 col-lg-9">
               <div className="row align-items-center">
                  <div className="col-12 text-center text-lg-start">
                     <p className="d-inline-block">
                        Elaborated with the ♥ diego_release. Copyright 2024 - All rights reserved
                     </p>
                  </div>
                  <div className="col-12 col-lg-4 d-flex justify-content-evenly">
                     <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/diego0at/"><img src="./assets/icons/linkedin.png" alt="linkedin" /></a>
                     <a rel="noreferrer" target="_blank" href="https://github.com/ideacodigo"><img src="./assets/icons/github.png" alt="github" /></a>
                     <a rel="noreferrer" target="_blank" href="https://twitter.com/diego_release/"><img src="./assets/icons/twitter.png" alt="twitter" /></a>
                     <a rel="noreferrer" target="_blank" href="https://www.instagram.com/diego_release/"><img src="./assets/icons/instagram.png" alt="instagram" /></a>
                  </div>
                  <div className="col-12 col-lg-8 text-end">
                     <div className="row w-100 text-secondary text-end d-inline-block" style={{ fontSize: "60px", lineHeight: "normal"}}>
                        <div className="w-100 text-start">
                           oO
                        </div>
                        <div className="w-100" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "var(--bs-secondary)", position: "relative", top: "-35px" }}>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="row bg-secondary" style={{ height: "10px" }}>

               </div>
               
            </div>
         </div>
      </div>
   )
}
