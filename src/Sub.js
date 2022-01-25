import React from "react";
import "./Sub.css";

function Sub() {
  return (
    <div>
      <div className="container21">
        <h2>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h2>
        <div className="">
          <input className="inp" type="text" value={"\u2709 Your Email "} />
          <button className="but">Subscribe</button>
        </div>
        <img src="/images/Group77.png" className="arrow" alt="" />
        <img src="/images/ring1.png" className="ring1" alt="" />
        <img src="/images/ring2.png" className="ring2" alt="" />
        <img src="/images/Group5.png" className="g2" alt="" />
      </div>
    </div>
  );
}

export default Sub;
