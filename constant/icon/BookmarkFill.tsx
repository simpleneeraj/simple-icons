import * as React from "react";
type SVG = React.SVGProps<SVGSVGElement>;
interface SVGICONPROPS extends SVG {
  size?: number | string;
  color?: string;
}
export const BookmarkFill = (props: SVGICONPROPS) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      // stroke={color}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M8.99902 23.3223C9.47363 23.3223 9.78125 23.0762 10.5283 22.3467L13.9209 18.9893C13.9561 18.9453 14.0352 18.9453 14.0703 18.9893L17.4717 22.3467C18.2188 23.0762 18.5176 23.3223 19.001 23.3223C19.7041 23.3223 20.1436 22.8389 20.1436 22.0479V6.70215C20.1436 4.95312 19.2295 4.03027 17.498 4.03027H10.4932C8.76172 4.03027 7.84766 4.95312 7.84766 6.70215V22.0479C7.84766 22.8389 8.28711 23.3223 8.99902 23.3223Z"
      />
    </svg>
  );
};
