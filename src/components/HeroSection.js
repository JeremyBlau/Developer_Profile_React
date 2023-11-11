import React from 'react';
import HeroImg from '../assets/images/Hero.png';
import PText from './PText';
import '../styles/HeroSection.css';
import Button from './Button';

export default function HeroSection() {
  return (
    <div>
      <div className="hero__container">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, my name is</span>
            <span> Jeremy Blau</span>
          </h1>
          <div className="hero__img-container">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I have been a product manager for many years, and recently I've
              worked to upgrade my front-end developer skills. Please enjoy
              browsing my body of work.
            </PText>
            <Button btnLink="/projects" />
          </div>
        </div>
      </div>
    </div>
  );
}