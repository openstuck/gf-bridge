import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path d="M15.2037 3.32415L8.57868 9.94022C8.46559 10.0533 8.33166 10.1099 8.1769 10.1099C8.02214 10.1099 7.88821 10.0533 7.77511 9.94022L1.15011 3.32415C1.03702 3.21105 0.980469 3.07564 0.980469 2.9179C0.980469 2.76016 1.03702 2.62474 1.15011 2.51165L2.63225 1.03843C2.74535 0.925339 2.87928 0.868792 3.03404 0.868792C3.1888 0.868792 3.32273 0.925339 3.43583 1.03843L8.1769 5.77951L12.918 1.03843C13.0311 0.925339 13.165 0.868792 13.3198 0.868792C13.4745 0.868792 13.6084 0.925339 13.7215 1.03843L15.2037 2.51165C15.3168 2.62474 15.3733 2.76016 15.3733 2.9179C15.3733 3.07564 15.3168 3.21105 15.2037 3.32415Z" />
    </Svg>
  );
};

export default Icon;