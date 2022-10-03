type TepmlateEncoding = "props: SVGICONPROPS" | "props"
type ExportType = "default-export" | "named-export"

interface TemplateTypes {
  uniqName?: string
  innerString?: string
  encoding?: TepmlateEncoding
  exportType?: ExportType;
  viewBox?: string | null;
}

const template = ({ encoding, exportType, innerString, uniqName, viewBox }: TemplateTypes) => {
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
        viewBox="${viewBox || '0 0 512 512'}"
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
const interfaceText = `
import * as React from "react";
type SVG = React.SVGProps<SVGSVGElement>
interface SVGICONPROPS extends SVG {
    size?: number | string;
    color?: string;
}`

/**
 * 
 * @param uniqName name of component
 * @param innerString innner String for svg child
 * @returns string
 */

const wraperStrings = (
  { uniqName, innerString, exportType, viewBox }: TemplateTypes
) => {
  let tsxString = template({
    uniqName,
    innerString,
    encoding: "props: SVGICONPROPS",
    exportType,
    viewBox
  }).trim();

  let jsxString = template({
    uniqName,
    innerString,
    encoding: "props",
    exportType,
    viewBox
  }).trim();

  // TYPESCRIPT INTERFACE
  let interfaceString = interfaceText.trim()
  // TYPESCRIPT CODE
  let tsxFileString = `${interfaceString}\n${tsxString}`;
  return { tsxString, jsxString, interfaceString, tsxFileString };
};
export default wraperStrings

