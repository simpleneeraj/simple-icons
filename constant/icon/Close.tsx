import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const CloseOutline = (props: SVGTYPE) => {
  const { color = "#aaa", size = "30px" } = props;
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
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z"
      />
    </svg>
  );
};
export default CloseOutline;
