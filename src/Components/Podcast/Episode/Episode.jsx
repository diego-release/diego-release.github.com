import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Episode.css";
import { useEffect, useState } from "react";

export const Episode = ({ stateEpisode = true, title, comments, users }) => {
   const [heightCassetteEpisode, setHeightCassetteEpisode] = useState(0);
   useEffect(() => {
      setHeightCassetteEpisode(
         document.getElementById("cassette-episode").clientHeight
      );
   }, [stateEpisode]);

   return (
      <>
         <div>
            <div
               className="disabled-episode"
               style={{
                  position: "absolute",
                  width: "100%",
                  height: `${heightCassetteEpisode}px`,
                  background: "#80808085",
                  zIndex: "1",
                  display: stateEpisode ? "none" : "block",
               }}
            ></div>
            <div
               id="cassette-episode"
               className="animate__animated animate__jackInTheBox animate__slower mb-4"
            >
               <div className="container-fluid">
                  <div className="bg-on-secondary episode-top-edge">
                     {/* line top edge: part top of the cassette */}
                  </div>
               </div>
               <div className="container">
                  <div className="border-5 border-primary-variant episode-top-lower text-center">
                     <h4 className="mt-3 mb-0">{title}</h4>
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
                           // autoPlay
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
                        <div className="position-absolute episode-comments w-100">
                           <div className="row">
                              <div className="marquee">
                                 <ul className="marquee__content">
                                    {comments.map((comment) => {
                                       return (
                                          <li className="marquee__item">
                                             {comment}
                                          </li>
                                       );
                                    })}
                                    {comments.map((comment) => {
                                       return (
                                          <li className="marquee__item">
                                             {comment}
                                          </li>
                                       );
                                    })}
                                    {comments.map((comment) => {
                                       return (
                                          <li className="marquee__item">
                                             {comment}
                                          </li>
                                       );
                                    })}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="position-absolute w-100 top-50 start-0">
                        <div className="d-flex justify-content-center pt-2">
                           {users.map((user) => {
                              return (
                                 // eslint-disable-next-line react/jsx-key
                                 <div className="inline-block mx-3 text-center">
                                    <div>
                                       <img
                                          src={`./assets/icons/${user}.png`}
                                          alt="..."
                                          width="50px"
                                       />
                                    </div>
                                    <div className="fs-8">
                                       <a href=".">@{user}</a>
                                    </div>
                                 </div>
                              );
                           })}

                           
                           {/* <div className="inline-block mx-3 text-center">
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
                           </div> */}
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
         </div>
      </>
   );
};
