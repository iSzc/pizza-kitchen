import React from "react";
import style from "../../../style.module.css";

import twitterIcon from "../../../../assets/images/icon-twitter.svg";
import instagramIcon from "../../../../assets/images/icon-instagram.svg";
import facebookIcon from "../../../../assets/images/icon-facebook.svg";
import pinterestIcon from "../../../../assets/images/icon-pinterest.svg";

const SocialLinks = ({ urls }) => {
  const socialMediaIcons = {
    Facebook: facebookIcon,
    Twitter: twitterIcon,
    Instagram: instagramIcon,
    Pinterest: pinterestIcon,
  };

  return (
    <div className="flex justify-center w960:mr-0 mt-4 gap-x-6 mb-6">
      {Object.keys(urls).map((socialMedia, index) => (
        <a
          key={index}
          href={urls[socialMedia]}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 flex justify-center items-center"
        >
          <img
            src={socialMediaIcons[socialMedia]}
            alt={`Logo${socialMedia}`}
            className={style.imgFooter}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
