import React, { useState } from 'react';
import SharedLayout from './SharedLayout';
import AlumniPublic from '../alumniPage/alumni_for_public';
import HomePage from "./AppPage";
import AboutPage from "./About";

const RootHomePage = () => {
    const [child,setChild] = useState("home");
    let pageComponent;

    if (child === "home") {
        pageComponent = <HomePage />;
    } else if (child === "about") {
        pageComponent = <AboutPage />;
    } else if (child === "alumni") {
        pageComponent = <AlumniPublic />;
    }
  return (
        <>
            <SharedLayout setChild={setChild}/>
            {pageComponent}
        </>
  );
}

export default RootHomePage;
