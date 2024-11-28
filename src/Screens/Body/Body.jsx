import React from 'react'
import { BodyContact } from '../../Components/Body/Section/Contact'
import { BodySectionHeader } from '../../Components/Body/Section/Header'
import { BodyHome } from '../../Components/Body/Section/Home/Home'
import { BodySectionSkills } from '../../Components/Body/Section/Skills'
import { BodySectionWork } from '../../Components/Body/Section/Work'
export const Body = ({handleShow}) => {
   return (
      <>
         <BodyHome />
         <BodySectionHeader />
         <BodySectionWork handleShow={handleShow} />
         <BodySectionSkills handleShow={handleShow}/>
         <BodyContact />
      </>
   )
}
