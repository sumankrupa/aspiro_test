import React from "react";
import "./Services.css";

function Services() {
  return (
    <div>
      <div className="services">
        <div className="services__categorytext">category</div>
        <div className="services__weoffer">We Offer Best Services</div>
        <div className="services__categories">
          <div className="category">
            <div className="s1">
              <img src="/images/48.png" alt="" />
            </div>
            <h2>Calculated Weather</h2>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="category">
            <div className="s2">
              <img src="/images/Group51.png" alt="" />
            </div>

            <h2>Best Flights</h2>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="category">
            <div className="s3">
              <img src="/images/Group50.png" alt="" />
            </div>
            <h2>Local Events</h2>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
          <div className="category">
            <div className="s4">
              <img src="/images/Group49.png" alt="" />
            </div>
            <h2>Customization</h2>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
