"use client";

import dynamic from "next/dynamic";
import React from 'react'
import Hero from './hero'
import ProjectOverview from './project-overview'
import ColorTypography from './color-typography'
import UserPersona from './user-persona'

const Wireframes = dynamic(() => import("./wireframes"));
const UiScreens = dynamic(() => import("./ui-screens"));

const EasemartClient = () => {
  return (
    <div>
        <Hero />
        <ProjectOverview />
        <ColorTypography />
        <UserPersona />
        <Wireframes />
        <UiScreens />
    </div>
  )
}

export default EasemartClient
