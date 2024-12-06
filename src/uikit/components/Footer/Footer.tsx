import React from "react";
// import { baseColors, darkColors, lightColors } from "../../theme/colors";
// import { Flex, Box } from "../Box";
// import { Link } from "../Link";
// import {
//   StyledFooter,
//   StyledIconMobileContainer,
//   StyledList,
//   StyledListItem,
//   StyledText,
//   StyledSocialLinks,
//   StyledToolsContainer,
// } from "./styles";
import { FooterProps } from "./types";
// import { ThemeSwitcher } from "../ThemeSwitcher";
// import LangSelector from "../LangSelector/LangSelector";
// import CakePrice from "../CakePrice/CakePrice";
// import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
// import { Button } from "../Button";
// import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <div className="footer-area pt-100">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="single-footer-widget">
              <img src="/logo.svg" alt="greenfolio" />

              <p>
                Greenfolio is driven by Roburna Labs, a prominent company
                specializing in the development of technological solutions for
                both web2 and web3.
              </p>
            </div>
          </div>

          <div className=" col-md-3" style={{ paddingLeft: "40px" }}>
            <div className="single-footer-widget">
              <h3>Follow Us</h3>

              <ul className="socil-link">
                <li>
                  <a
                    href="mailto:info@greenfolio.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-envelope" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/greenfoliotoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/greenfolioannouncements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram" />
                  </a>
                </li>
                {/* <li>
                              <a href="https://www.facebook.com/empiretokenworld" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-facebook" />
                              </a>
                          </li>
 
                          <li>
                              <a href="https://www.whatsapp.com/empiretoken/" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-whatsapp" />
                              </a>
                          </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area pt-70">
        <div className="container">
          <div className="copy-right-wrap">
            <div className="text-center">
              <p>© 2024 Greenfolio . All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
