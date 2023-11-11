import React from 'react';
import HeroImg from '../assets/images/hero.png';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Jeremy Blau</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
