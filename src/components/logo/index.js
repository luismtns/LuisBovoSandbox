import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

import LogoGengarOutlineImage from "./images/Logo__gengar--outline.png";
import LogoGengarImage from "./images/Logo__gengar.png";
import LogoTypoImage from "./images/Logo__typo.png";
import LogoCircleImage from "./images/Logo__circle.png";
import LazyImage from "../lazy-image";

const Logo = () => {
  const [ClientXGengar, setClientXGengar] = useState(0);
  const [ClientYGengar, setClientYGengar] = useState(0);

  const onMouseMove = (e) => {};
  return (
    <div
      onMouseMove={(e) => {
        setClientXGengar(Math.floor(window.innerWidth / 2 - e.clientX) * 0.05);
        setClientYGengar(Math.floor(window.innerHeight / 5 - e.clientY) * 0.05);
      }}
      className="Logo"
    >
      <div className="Logo--wrap">
        <LazyImage
          src={LogoTypoImage}
          className="Logo__typo"
          alt="Luis Bovo designer and developer logo circle"
        />
        <LazyImage
          style={{
            transform: `rotate(${ClientYGengar + 2}deg)`,
          }}
          src={LogoCircleImage}
          className="Logo__circle"
          alt="Luis Bovo designer and developer logo circle"
        />
        <LazyImage
          style={{
            transform: `translate(${ClientXGengar}px,${ClientYGengar}px)`,
          }}
          src={LogoGengarImage}
          className="Logo__gengar"
          alt="Luis Bovo designer and developer logo circle"
        />
        {/* <LazyImage
          src={LogoGengarOutlineImage}
          className="Logo__gengar--outlined"
          alt="Luis Bovo designer and developer logo circle"
        /> */}
      </div>
    </div>
  );
};

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
