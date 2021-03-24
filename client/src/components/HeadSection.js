import React from "react";
import "../App.css";
import "./HeadSection.css";

function HeadSection() {
  return (
    <div className="Head-container">
      <video src="/Video/Video-1.mp4" autoPlay loop muted />
      <h1 className="GroovIn">GroovIn</h1>
      <p>The Musician Social Media</p>
    </div>
  );
}

export default HeadSection;
