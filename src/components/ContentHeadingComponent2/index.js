import React from "react";

// import Style from "./ComponentContent2.module.scss";

const index = ({headingList}) => {
  return (
    <div className="container">
     
     {headingList.map((value)=>
     <div>
        <h2>{value.heading}</h2>
        <p style={{textAlign:"left"}}>{value.detail}</p>
     </div>)}
  
      <div>
     
      
      </div>
    
      
    </div>
  );
};

export default index;