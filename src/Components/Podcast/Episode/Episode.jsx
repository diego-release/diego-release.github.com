import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Episode.css";

export const Episode = () => {
   return (
      <>
         <div>
            <div className="container-fluid">
               <div className="bg-on-secondary episode-top-edge">
                  {/* line top edge: part top of the cassette */}
               </div>
            </div>
            <div className="container">
               <div className="border-5 border-primary-variant episode-top-lower text-center">
                  <h4 className="mt-3 mb-0">personal brand</h4>
                  <span className="fs-8">11-12-12</span>
               </div>

               <div className="mt-4 pt-3 d-flex justify-content-center">
                  <div className="border border-2 border-bg-primary episode-player d-flex align-items-center justify-content-center">
                     {/* <div>
                button
              </div>
              <div className='flex-grow-1'>
                time
              </div> */}
                     <AudioPlayer
                        autoPlay
                        src="https://ia800701.us.archive.org/14/items/12-otra-semana-de-rock-26-11-2024-entrevista-a-supergatos/12%20OTRA%20SEMANA%20DE%20ROCK%20%2826-11-2024%29%20ENTREVISTA%20A%20SUPERGATOS.mp3"
                        // onPlay={e => console.log("onPlay")}
                        // other props here
                     />
                  </div>
               </div>
            </div>

            <div className="container-fluid bg-secondary my-3 episode-banner-of-content">
               <div className="position-relative">
                  <div className="text-nowrap fs-7 position-relative">
                     <div className="position-absolute episode-comments">
                        <div className="row">
                           <div className="marquee">
                              <ul className="marquee__content">
                                 <li className="marquee__item">
                                    &nbsp;Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Minus inventore dolorem architecto
                                    quas quam sunt quo dolor! &bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Eius, dolorem veniam rerum, sint,
                                    necessitatibus nemo numquam non a voluptates
                                    distinctio labore.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Dolor quam vel porro, cum blanditiis
                                    minus asperiores est eos deleniti nam cumque
                                    saepe?&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Fuga, similique. Molestias dolore
                                    voluptatum adipisci minima est!&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Aut nisi quia numquam maiores rerum
                                    voluptates hic ullam, fuga fugit in.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;labore unde corporis eum, voluptas ea
                                    et possimus odio sapiente!&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Iusto illum obcaecati at reprehenderit
                                    corrupti, nobis nulla.&bull;
                                 </li>
                                 {/* Repeat marquee items */}
                                 <li className="marquee__item">
                                    &nbsp;Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Minus inventore dolorem architecto
                                    quas quam sunt quo dolor! &bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Eius, dolorem veniam rerum, sint,
                                    necessitatibus nemo numquam non a voluptates
                                    distinctio labore.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Dolor quam vel porro, cum blanditiis
                                    minus asperiores est eos deleniti nam cumque
                                    saepe?&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Fuga, similique. Molestias dolore
                                    voluptatum adipisci minima est!&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Aut nisi quia numquam maiores rerum
                                    voluptates hic ullam, fuga fugit in.&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;labore unde corporis eum, voluptas ea
                                    et possimus odio sapiente!&bull;
                                 </li>
                                 <li className="marquee__item">
                                    &nbsp;Iusto illum obcaecati at reprehenderit
                                    corrupti, nobis nulla.&bull;
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="position-absolute w-100 top-50 start-0">
                     <div className="d-flex justify-content-center pt-2">
                        <div className="inline-block mx-3 text-center">
                           <div>
                              <img
                                 src="./assets/icons/perfil-a.png"
                                 alt="..."
                                 width="50px"
                              />
                           </div>
                           <div className="fs-8">
                              <a href=".">@andreaes</a>
                           </div>
                        </div>
                        <div className="inline-block mx-3 text-center">
                           <div>
                              <img
                                 src="./assets/icons/perfil-b.png"
                                 width="50px"
                                 alt="..."
                              />
                           </div>
                           <div className="fs-8">
                              <a href=".">@carloso</a>
                           </div>
                        </div>
                        <div className="inline-block mx-3 text-center">
                           <div>
                              <img
                                 src="./assets/icons/perfil-c.png"
                                 width="50px"
                                 alt="..."
                              />
                           </div>
                           <div className="fs-8">
                              <a href=".">@lafina</a>
                           </div>
                        </div>
                        <div className="inline-block mx-3 text-center">
                           <div>
                              <img
                                 src="./assets/icons/perfil-d.png"
                                 width="50px"
                                 alt="..."
                              />
                           </div>
                           <div className="fs-8">
                              <a href=".">@pasiente</a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="w-100 position-absolute episode-form text-center">
                     <div className="d-flex justify-content-center">
                        <input
                           className="form-control-sm form-control mb-3 w-50"
                           name="email"
                           value=""
                           id="contact_email"
                           type="email"
                           disabled
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="bg-on-secondary episode-top-edge mb-2">
                  {/* line top edge: part top of the casSette */}
               </div>
               <div className="d-flex justify-content-center">
                  <div className="episode-footer mb-2"></div>
               </div>
            </div>
         </div>
      </>
   );
};
