import React, { useState } from 'react';
import AlumniTPO from '../Alumni Pages/Alumni TPO/alumni_tpo';
import Header from "./header";
import LogOutTpo from "./LogOutTpo";
import HR from './HR';



function TpoRoot({ settpologin , tpologin }) {
    // console.log("status of tpo login is in tporoot ",tpologin);
    const [child,setChild] = useState("hr");
    let pageComponent;

    if (child === "hr") {
        pageComponent = <HR />;
    } else if (child === "alumniTpo") {
        pageComponent = <AlumniTPO />;
    }
  return (
        <>
            <Header setChild={setChild} tpologin={tpologin} settpologin={settpologin} />
            {pageComponent}
        </>
  );
}

export default TpoRoot;
