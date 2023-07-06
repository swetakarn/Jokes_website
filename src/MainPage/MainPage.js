import React, { useState } from "react";
import Card from "../component/Card/Card";
import "./MainPage.css";
import Modals from "../component/Modal/Modal";

const MainPage = () => {
 
  return (
    <div className="main_page">
      <div className="py-3">
      <h2 className="head my_animation">Chunk Norries</h2>
      </div>
     

      <Card/>
     
    </div>
  );
};

export default MainPage;
