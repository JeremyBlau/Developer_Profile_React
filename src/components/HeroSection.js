import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import PText from './PText';
import '../styles/HeroSection.css';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

const HeroStyles = styled.div`
  .hero__social {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }

  .hero__social__indicator {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-40px) rotate(-90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div>
        <div className="hero__container">
          <div className="container">
            <h1 className="hero__heading">
              <span className="hero__name">Hello, my name is </span>
              <p> </p>
              <span className="hero__name--highlight">Jeremy Blau</span>
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
              <Button btnLink="/projects" btnTest="see my projects" />
            </div>
            <div className="hero__social">
              <div className="hero__social__indicator">
                <p>Follow</p>
                <img src={SocialMediaArrow} alt="icon" />
              </div>
              <div className="hero__social__text">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/jeremy.blau/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      IG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jeremy-blau-4636a058/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
