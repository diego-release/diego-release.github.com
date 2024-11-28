import React, { useState } from 'react';
import { BlogBodyCard } from './Card';

import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import tools from '../../../Data/tools';

export const BlogBody = () => {


   return (
      <div className='mt-8 bg-secondary-variant'>
         <div className='container'>
            <div className='row position-relative top-0 top-md-nem-3'>

               <BlogBodyCard projects={tools.framework[0].projects} porcentaje={75} title={'React'} icon={FaReact} description={'Una de mis herramientas favoritas para el front end, es la primera librería que empece a estudiar a fondo'} />
               <BlogBodyCard porcentaje={25} title={'Firebase'} description={'La base de datos más fácil de utilizar, por esta característica me gusta utilizarla bastante, sobre todo en proyectos pequeños'} icon={SiFirebase} />
               <BlogBodyCard porcentaje={50} title={'Git'} description={'Sin duda alguna la herramienta fundamental para cualquier trabajo'} icon={SiGit} />
               <BlogBodyCard porcentaje={75} title={'HTML'} description={'La base del desarrollo web, hace 4 años que trabajo con HTML y aún asi tengo mucho por aprender'} icon={FaHtml5} />
               
            </div>

         </div>

      </div>
   )
}

