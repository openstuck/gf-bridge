import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    className="list-icon"
    viewBox="0 0 16 16"
    width="13px"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M2.5 11.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 3 14v-2a.5.5 0 0 0-.5-.5Zm0-10h-2A.5.5 0 0 0 0 2v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 3 4V2a.5.5 0 0 0-.5-.5Zm0 5h-2A.5.5 0 0 0 0 7v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 3 9V7a.5.5 0 0 0-.5-.5Zm13 5.5h-10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm0-10h-10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm0 5h-10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </Svg>

  );
};

export default Icon;
