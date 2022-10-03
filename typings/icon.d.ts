import * as React from "react";
type SVG = React.SVGProps<SVGSVGElement>
interface SVGICONPROPS extends SVG {
    size?: number | string;
    color?: string;
}