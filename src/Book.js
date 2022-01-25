import React from "react";
import "./Book.css";
function Book() {
  return (
    <div className="bookatrip">
      <div className="contents">
        <div className="list">
          <p className="easyandfast">Easy and Fast</p>
          <h1>Book Your Next Trip In 3 Easy Steps</h1>
          <div className="listoptions">
            <img
              src="/images/Group7.png"
              alt=""
              className=" special listimage"
            />
            <div className="listdes">
              <h5>Choose Destination</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="listoptions">
            <img
              src="/images/Group12.png"
              alt=""
              className="special listimage"
            />
            <div className="listdes">
              <h5>Make a payment</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="listoptions">
            <img
              src="/images/Group11.png"
              alt=""
              className="special listimage"
            />
            <div className="listdes">
              <h5>Reach Airpor on Selected Date</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/Rectangle17.jpg"
            className="redgirl special"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Trip To Greece</b>
            </h4>
            <p className="joseph">14-29 June | by Robbin joseph</p>
            <div className="vectors">
              <img src="/images/LEAF.png" alt="" />
              <img src="/images/map icon.png" alt="" />
              <img src="/images/send.png" alt="" />
            </div>
            <div className="total">
              <div className="people_going">
                <img src="/images/Group.png" className="special group" alt="" />
                <p>24 people going</p>
              </div>
              <img
                src="/images/heart (6) 1.png"
                className="special heart"
                alt=""
              />
            </div>
            <div className="card1">
              <img src="/images/MaskGroup.png" alt="" />
              <div className="details">
                <p className="percent">Ongoing</p>
                <h4>Trip to rome</h4>
                <label for="file">
                  <span className="percent"> 40%</span>{" "}
                  <strong>completed</strong>{" "}
                </label>

                <div className="progress">
                  <div className="progress__bar"></div>
                </div>
              </div>
            </div>
            
              <img src="/images/circle.png" className="blue" alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
