
import {
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom'
import { Footer } from '../../Components/Footer'
import { NavBar } from '../../Components/NavBar/NavBar'
import { ScreenBlog } from '../Blog/Blog'
import { ScreenContact } from '../Contact/Contact'
import { ScreenPodcast } from '../Podcast/Podcast'

export const ScreenRouters = () => {
   return (
      <>
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/" element={<ScreenBlog />}/>
               <Route path="/contact" element={<ScreenContact />}/>
               <Route path="/podcast" element={<ScreenPodcast />}/>
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   )
}
