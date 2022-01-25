import React from "react";
import "./Last.css";

function Last() {
  return (
    <div className="footer">
      <footer className="container2">
        <div className="row">
          <div className="footer__col extra">
            <h4 className="tit">Jadoo</h4>
            <ul>
              <li>
                {" "}
                <a href="#">
                  Book your trip in minute, get full Control for much longer.
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col extra">
            <h4>Company</h4>
            <ul>
              <li>
                {" "}
                <a href="#">About</a>
              </li>
              <li>
                {" "}
                <a href="#">Careers</a>
              </li>
              <li>
                {" "}
                <a href="#">Mobile</a>
              </li>
            </ul>
          </div>
          <div className="footer__col extra">
            <h4>Contact</h4>
            <ul>
              <li>
                {" "}
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                {" "}
                <a href="#">Press</a>
              </li>
              <li>
                {" "}
                <a href="#">Affiliates</a>
              </li>
            </ul>
          </div>
          <div className="footer__col extra">
            <h4>More</h4>
            <ul>
              <li>
                {" "}
                <a href="#">Airline fees</a>
              </li>
              <li>
                {" "}
                <a href="#">Airline</a>
              </li>
              <li>
                {" "}
                <a href="#">Low fare tips</a>
              </li>
            </ul>
          </div>
          <div className="social__links">
            <div className="icons">
              <img src="/images/insta.png" className="insta" alt="face" />
              <img src="/images/twitter3.png" alt="blank" className="bird" />
              <img src="/images/face.png" className="face" alt="insta" />
            </div>
            <h4>Disover our app</h4>
            <div className="downloads">
              <img src="/images/GooglePlay.png" alt="" />

              <img src="/images/PlayStore.png" alt="" />
            </div>
          </div>
        </div>

        <div className="companytext">
          <p>All rights reserved@jadoo.co</p>
        </div>
      </footer>
    </div>
  );
}

export default Last;
