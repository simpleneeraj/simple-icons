import * as React from "react";
type SVG = React.SVGProps<SVGSVGElement>;
interface SVGICONPROPS extends SVG {
  size?: number | string;
  color?: string;
}
const CodeDownload = (props: SVGICONPROPS) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      stroke={color}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="160 368 32 256 160 144"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="352 368 480 256 352 144"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42px"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        points="192 288.1 256 352 320 288.1"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42px"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        x1="256"
        y1="160"
        x2="256"
        y2="336.03"
        fill="none"
        stroke="undefined"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="42px"
      />
    </svg>
  );
};
export default CodeDownload;
