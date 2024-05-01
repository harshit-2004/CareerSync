import React, { useState } from 'react';
import AlumniTPO from '../alumniPage/alumni_tpo';
import Header from "./header";
import HR from '../HR';



const TpoRoot = () => {
    const [child,setChild] = useState("hr");
    let pageComponent;

    if (child === "hr") {
        pageComponent = <HR />;
    } else if (child === "alumniTpo") {
        pageComponent = <AlumniTPO />;
    }
  return (
        <>
            <Header setChild={setChild}/>
            {pageComponent}
        </>
  );
}

export default TpoRoot;
