import * as React from "react";
type SVG = React.SVGProps<SVGSVGElement>
interface SVGICONPROPS extends SVG {
    size?: number | string;
    color?: string;
}
export const Apps = (props: SVGICONPROPS) => {
    const {  color="currentColor",size = "30px" } = props;
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
        <path xmlns="http://www.w3.org/2000/svg" d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z"/><path xmlns="http://www.w3.org/2000/svg" d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z"/><path xmlns="http://www.w3.org/2000/svg" d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z"/><path xmlns="http://www.w3.org/2000/svg" d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z"/><path xmlns="http://www.w3.org/2000/svg" d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z"/><path xmlns="http://www.w3.org/2000/svg" d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z"/><path xmlns="http://www.w3.org/2000/svg" d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z"/><path xmlns="http://www.w3.org/2000/svg" d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z"/><path xmlns="http://www.w3.org/2000/svg" d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z"/>
      </svg>
    );
  };