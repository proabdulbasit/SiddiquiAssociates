import React from "react";
import Serviceslist from "../servicesList/Serviceslist";
import Style from "./serviclayoutcontent.modue.scss";

const index = ({heading,detail,list,content,listheading}) => {
  return (
    <div className="container">
      <h2 className={Style.h1}>{heading}</h2>
      <div>
        <p>
       {detail}
        </p>
        <p>{listheading}</p>
        <ul>
      <Serviceslist list={list}/>

        </ul>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default index;
