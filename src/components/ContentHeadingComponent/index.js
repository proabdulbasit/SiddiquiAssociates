import React from "react";

import Style from "./componentContent.module.scss";

const index = ({heading,headingList,lastContent}) => {
  return (
    <div className="container">
      <h2 className={Style.h1}>{heading}</h2>
     {headingList.map((value)=>
     <div>
        <h3 style={{fontSize:"18px"}}>{value.heading}</h3>
        <p>{value.detail}</p>
     </div>
     
     
     )}
  
      <div>
     
      
      </div>
    
      <p>{lastContent}</p>
    </div>
  );
};

export default index;