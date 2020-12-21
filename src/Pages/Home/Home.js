import React, { useEffect, useState } from "react";
import "./Home.scss";
import Parallax from "react-rellax";
import HeadingMouseover from "../../Component/Heading_mouseover/HeadingMouseover";
import ToothMouseover from "../../Component/Tooth_mouseover/ToothMouseover";
import Testing from "../../Component/testing/Testing";
import HeadingMouseoverMobile from "../../Component/Heading_mouseover_mobile/HeadingMouseover_mobile";
import ToothMouseoverMobile from "../../Component/Tooth_mouseover_mobile/ToothMouseover_mobile";
import Lefthand from "../../assets/left.png";
import Righthand from "../../assets/2.png";
import Visit from "../Visit/Visit";
import NavBar from "../../Component/NavBar/NavBar";

export default function Home() {
  const [offsetx, setOffsetx] = useState(0);
  const handlescroll = () => setOffsetx(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <div>
      <section>
        <NavBar />
        <div className="sky">
          <div className="sky_top"></div>
          <div className="sky_bottom"></div>
        </div>
        <div className="mouseover_animation">
          <HeadingMouseover />
          <ToothMouseover />
        </div>
        <div className="mouseover_animation_mobile">
          <HeadingMouseoverMobile />
          <ToothMouseoverMobile />
        </div>
        <div className="hand_animation">
          <div className="row">
            <div className="col-6" id="left_hand">
              <img
                src={Lefthand}
                style={{ transform: `translateX(${offsetx * 0.2}px)` }}
              />
            </div>
            <div className="col-6" id="right_hand">
              <img
                src={Righthand}
                style={{ transform: `translateX(-${offsetx * 0.2}px)` }}
              />
            </div>
          </div>
        </div>
      </section>
      <Visit />
    </div>
  );
}
