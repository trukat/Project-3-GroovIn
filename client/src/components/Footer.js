import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a
              href="https://github.com/Frank-5850/Project3-2.0"
              target="_blank"
              rel="noreferrer"
            >
              How it works
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Team</h2>
            <a
              href="https://github.com/Sudan20215"
              target="_blank"
              rel="noreferrer"
            >
              Sudan
            </a>
            <a href="https://github.com/Nsilo" target="_blank" rel="noreferrer">
              Jivaka
            </a>
            <a
              href="https://github.com/trukat"
              target="_blank"
              rel="noreferrer"
            >
              Kathy
            </a>
            <a
              href="https://github.com/Frank-5850"
              target="_blank"
              rel="noreferrer"
            >
              Franco
            </a>
            <a
              href="https://github.com/lstvgore"
              target="_blank"
              rel="noreferrer"
            >
              Lester
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>UC Berkeley Extension</h2>
            <a
              href="https://extension.berkeley.edu/publicViewHome.do?method=load&b_source=google&b_medium=cpc&b_campaign=7282495872&b_adgroup=80171951946&b_keyword=%2Bberkeley%20%2Bcontinuing%20%2Beducation&b_matchtype=b&b_gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisRDWPgg_KZPs1V_0Dl_SPpK7RROJCiYREkY49lR6jW88VVadH5qvIaArseEALw_wcB&b_device=c-&b_position=&b_adid=391646265564&b_placement=&b_random=307864989248245766&gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisRDWPgg_KZPs1V_0Dl_SPpK7RROJCiYREkY49lR6jW88VVadH5qvIaArseEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              Bootcamp
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              Youtube
            </a>
            <a
              href="https://www.spotify.com/us/"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
            <a
              href="https://www.apple.com/itunes/"
              target="_blank"
              rel="noreferrer"
            >
              Itunes
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="navbar-logo">
              GroovIn
              <i className="fas fa-record-vinyl" />
            </Link>
          </div>
          <small className="website-rights">Team Berlin © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link Github"
              href="https://github.com/Frank-5850/Project3-2.0"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
