import React from 'react';
import './Hero.css'

function Hero() {
  return <div className='hero__container'>
      
      <div className="hero">
          <div className="hero__tagline">
            Best Destinations around the world
          </div>
          <div className="hero__heading">
            Travel, enjoy and live a new and full life
          </div>
          <div className="hero__desc">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className="hero__cta">
            <button className="hero__cta__find">Find out more</button>
            <div className="hero__cta__demo">
              <div className="shape">
                <img src="/images/Ellipse1.png" className="ellipse" alt="" />
                <div id="triangle-right"></div>
              </div>

              <div className="hero__cta__demo__text">Play Demo</div>
            </div>
          </div>
        </div>
        <img src="/images/Image.png" className='girl' alt="" />
  </div>;
}

export default Hero;
