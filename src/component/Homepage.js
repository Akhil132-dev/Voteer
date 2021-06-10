import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const [state, setstate] = useState([
    "Hello World.",
    "Console Text",
    "Made with Love.",
  ]);
  return (
    <div className="homepage">
      <div className="homepage__left">
        <h1>Vote Now !</h1>
        <h1>Choose Your Winner !</h1>
        <p>

          “So when you don’t vote, what you’re<br /> really doing is letting  someone<br />
          else take power over your own life.”
        </p>
      </div>
      <img src="http://ecisveep.nic.in/uploads/monthly_2018_06/logo.thumb.png.e569e375c72d643c7ff2f90035e5756a.png" alt="" />
    </div>
  );
}

export default Homepage;
