import React, { useEffect } from "react";
import "./sidedash.css";
const SideDash = () => {
  function toggle() {
    var x = document.getElementById("sideNav");
    if (x.className === "sidebar") {
      x.className += " responsive";
    } else {
      x.className = "sidebar";
    }
  }
  return (
    <div class="sidebar" id="sideNav">
      <a class="brand" href="#">
        <img src="/Resumizeme.svg" style={{ height: "30px" }} />
      </a>

      <a href="#">
        <span style={{ display: "flex", alignItems: "center" }}>
          <img src="listtop.svg" style={{ paddingRight: "5px" }} /> <strong> My Templates </strong>
        </span>
      </a>
      <a href="#">
        <i className="fa fa-search"></i> <strong> Search </strong>
      </a>
      {[...Array(3)].map((ini, i) => {
        return (
          <a href="#">
            <i className="fa fa-star" style={{ color: "gold" }}></i>
            Software Engineer {i + 1}
          </a>
        );
      })}
      {[...Array(3)].map((ini, i) => {
        return (
          <a href="#">
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src="pie.svg" style={{ paddingRight: "5px" }} />
              Past Search {i + 1}
            </span>
          </a>
        );
      })}

      <a href="#">
        <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span>
            <img src="list.svg" style={{ paddingRight: "5px" }} />
            Mood Board
          </span>
          <img src="miniadd.svg" />
        </span>
      </a>

      {[...Array(2)].map((ini, i) => {
        return (
          <a href="#">
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src="stash.png" style={{ paddingRight: "5px" }} />
              Board {i + 1}
            </span>
          </a>
        );
      })}

      {[...Array(2)].map((ini, i) => {
        return (
          <a href="#">
            <span style={{ display: "flex", alignItems: "center" }}>
              <img src="lock.png" style={{ paddingRight: "5px" }} />
              Board Agent {i + 1}
            </span>
          </a>
        );
      })}

      <a href="#" className="bottomTog">
        <div className="text">
          <img src="logo192.png" />
          <p>Carla</p>
        </div>
        <i className="fa fa-cog"></i>
      </a>
      <a href="javascript:void(0);" class="icon" onClick={toggle}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default SideDash;
