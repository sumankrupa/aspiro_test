import React from 'react';
import './Trips.css'

function Trips() {
  return <div className="services">
  <div className="services__categorytext">Top Selling</div>
  <div className="services__weoffer">Top Destinations</div>
  <div className="services__categories">
    <div className="category1">
      {/* <div className="d1"> */}
      <img src="/images/Rect15.png" className='placeimage' alt="" />
      {/* </div> */}
      <div className="forspace">
        <p>Rome, Italy</p>
        <p>$5,42k</p>
      </div>
      <div className="trip">
        <img src="/images/Vector.png" className='placeimage' alt="" />
        <p>10 Days Trip</p>
      </div>
    </div>
    <div className="category1">
      {/* <div className="d2"> */}
      <img src="/images/Rect14.jpg" className='placeimage' alt="" />

      {/* </div> */}
      <div className="forspace">
        <p>London, UK</p>
        <p>$4.2k</p>
      </div>
      <div className="trip">
        <img src="/images/Vector.png" className='placeimage' alt="" />
        <p>12 Days Trip</p>
      </div>
    </div>
    <div className="category1 forspring">
      {/* <div className="d3"> */}

      <img src="/images/Rect17.png" className='placeimage' alt="" />
      {/* </div> */}
      <div className="forspace">
        <p>Full Europe</p>
        <p>$15k</p>
      </div>
      <div className="trip">
        <img src="/images/Vector.png" className='placeimage' alt="" />
        <p>28 Days Trip</p>
      </div>
      <img src="/images/Dec.png" className="spring" alt="" />
    </div>
  </div>
</div>;
}

export default Trips;
