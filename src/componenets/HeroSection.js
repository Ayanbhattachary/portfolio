import React, { Component } from "react";
import avatar from "../images/avatar_2.svg";
import "../styles/hero.css";
import $ from "jquery";

export default class HeroSection extends Component {
  componentDidMount() {
    $(document).ready(function () {
      let calculateWindowWidth = $(window).width();
      if (calculateWindowWidth > 1960) {
        $(".avatar").css({ width: "250px" });
      } else if (calculateWindowWidth < 768) {
        $(".avatar").css({ width: "100px" });
      } else {
        $(".avatar").css({ width: "200px" });
      }
    });

    // typing effect
    var i = 0;
    var txt = `Hi there, my name is Ayan Bhattacharya, and I love building software products that solves real-world user problems to make their life more comfortable.❤️`; /* The text */
    var speed = 30; /* The speed/duration of the effect in milliseconds */
    function typeWriter() {
      if (i < txt.length) {
        document.querySelector(".greeting-text").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    $(".greeting-message").fadeIn(5000);
    setTimeout(() => {
      typeWriter();
    }, 3000);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Main-banner">
            <h1 className="banner-title">
              Designer, Front-end Developer & Entrepreneur
            </h1>
            <p className="banner-subtitle ">
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div className="avatar-animation">
              <img
                className="avatar avatar-desktop-1"
                src={avatar}
                alt="none"
              />
              <div className="greeting-message">
                <p className="greeting-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
