import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import "../../src/assets/css/sidedivision.css";
import Group from "../assets/images/Group.png";
import Develope from "../assets/images/개발부.png";
import Develope_shadow from "../assets/images/개발부_shadow.png";
import Sales from "../assets/images/영업부.png";
import Sales_shadow from "../assets/images/영업부_shadow.png";
import Human from "../assets/images/인사부.png";
import Human_shadow from "../assets/images/인사부_shadow.png";

export default function SidebarDivision({ division, setDivision, allinfo }) {

  return (
    // 여기도 컴포넌트화 필요

    <div
      className="sidebar_division"
      style={{
        display: "inline-block",
        width: "23%",
        minWidth: "20%",
        backgroundColor: "#e9e9e9",
        float: "left",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <br />
      <div>
        <img
          style={{ width: "50px", height: "50px", margin: "3px 5px 3px 5px" }}
          src={Group}
          alt="1"
          onClick={() => {
            setDivision(1);
          }}
        />
      </div>
      <br />
      <div>
        {allinfo.departmentNo === 2 ? 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Develope}
              alt="1"
              onClick={() => {
                setDivision(2);
                
              }}
            />
           : 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Develope_shadow}
              alt="1"
            />
            }
      </div>
      <div>
      {allinfo.departmentNo === 3 ? 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Sales}
              alt="1"
              onClick={() => {
                setDivision(3);
              }}
            />
           : 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Sales_shadow}
              alt="1"
            />
            }
      </div>
      <div>
      {allinfo.departmentNo === 4 ? 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Human}
              alt="1"
              onClick={() => {
                setDivision(4);
              }}
            />
           : 
            <img
              style={{
                width: "50px",
                height: "50px",
                margin: "3px 5px 3px 5px",
              }}
              src={Human_shadow}
              alt="1"
            />
        }
       </div>
    </div>
  );
}
