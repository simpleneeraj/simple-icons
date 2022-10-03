type TepmlateEncoding = "props: SVGTYPE" | "props"
type ExportType = "default-export" | "named-export"
const template = (uniqName?: string, innerString?: string, encoding?: TepmlateEncoding, exportType?: ExportType) => {

  let bool = exportType === "default-export"
  return `
  ${bool ? `` : `export`} const ${uniqName} = (${encoding}) => {
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
        ${innerString}
      </svg>
    );
  };
  ${bool ? `export default ${uniqName}` : ``}
  `
}
const iString = `
import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
}`

/**
 * 
 * @param uniqName name of component
 * @param innerString innner String for svg child
 * @returns string
 */

const wraperStrings = (uniqName?: string, innerString?: string, exportType?: ExportType) => {
  let tsxString = template(uniqName, innerString, "props: SVGTYPE", exportType).trim();
  let jsxString = template(uniqName, innerString, "props", exportType).trim();
  let interfaceString = iString.trim()
  let tsxFileString = `${interfaceString}\n${tsxString}`;
  return { tsxString, jsxString, interfaceString, tsxFileString };
};
export default wraperStrings

