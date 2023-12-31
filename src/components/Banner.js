import React from "react";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

import Artist from "../img/artist.jpg";
import Check from "../img/check.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" src={Artist} alt="" />

      <div className="content">
        <div className="breadCrumb">
          <p>
            Home <span>/Popular Artist</span>
          </p>

          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <img src={Check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>{" "}
              101,0404,1599 <span>Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>{" "}
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
};

export { Banner };
