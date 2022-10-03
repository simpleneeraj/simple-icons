import serializer from "./serializer";
import toCamelCase from "./toCamelCase";
import parseCSSText from "./parseCSSText";
import setAttributes from "./setAttributes";
import { PurifyOptions } from "typings";


// Empty Array
let emptyArray = new Array()
// Empty White space
let space = ""

const purify = async (iconPath: RequestInfo, { encoding, strokeColor }: PurifyOptions) => {
    // Fetch single icon data
    const data = await fetchData(iconPath)

    // Get svg document 
    const svgDocument = await serializer(data, "image/svg+xml");
    // Remove unnecessary nodes
    // console.log(svgDocument.documentElement.getAttribute('viewBox'));
    removeNode(svgDocument, "title")
    // Real ViewBox of SVG
    const viewBox = svgDocument.documentElement.getAttribute('viewBox')
    // children Array
    const childrenArray = Array.from(svgDocument.documentElement.children)
    //  Iterable<Element>
    childrenArray.forEach((child: Element) => {
        // Get Attribute from forEach children
        let attributes: Attr[] = Array.from(new Set(child.attributes));
        // Map attributes 
        attributes.map((attribute) => {
            // Attribute Name
            const attributeName = attribute.nodeName;
            // Attribute Value
            const attributeValue = attribute.nodeValue;
            // Convert Attribute to CamelCase
            const camelCase = toCamelCase(attributeName);
            // Checking Encoding
            let check = encoding === "javascript" ? camelCase : attributeName
            // Get Stroke att from child
            let stroke = child.getAttribute("stroke")
            // Get fill att from child
            let fill = child.getAttribute("fill")
            // Now remove unnecessary and Add usable Attribute 
            switch (attributeName) {
                case "style":
                    let styleAtt = child.getAttribute("style") as string;
                    let parsedCSS = parseCSSText(styleAtt, { cssToJs: encoding === "javascript" });
                    if (typeof parsedCSS === 'undefined') {
                        return
                    }
                    child.removeAttribute("style");
                    if (parsedCSS.style["fill"] !== "none") {
                        parsedCSS.style["fill"] = "inherit"
                    }
                    if (parsedCSS.style["stroke"] !== "none") {
                        parsedCSS.style["stroke"] = strokeColor
                    }
                    setAttributes(child, parsedCSS?.style);
                    break
                case "stroke":
                    if (stroke !== "none") {
                        setAttributes(child, { stroke: strokeColor });
                    }
                    break
                case "fill":
                    if (fill !== "none") {
                        setAttributes(child, { fill: 'inherit' });
                    }
                    break
                case "class":
                    setAttributes(child, { className: attributeValue });
                    break
                default:
                    child.removeAttribute(attributeName);
                    setAttributes(child, { [check]: attributeValue });
                    emptyArray.push(child.outerHTML)
                    break
            }
        });
    });

    // Get SVG as HTMLElement
    const svg = svgDocument.documentElement;
    // Get SVG as String
    let str = emptyArray.join(space)
    // Returns SVG and STRING
    return Promise.resolve({ svg, str, viewBox });

};
export default purify

const fetchData = async (url: RequestInfo) => {
    const req = await fetch(url)
    const data = await req.text() as string
    return Promise.resolve(data)

}


const removeNode = (doc: Document, nodeName: keyof HTMLElementTagNameMap) => {
    if (doc.getElementsByTagName(nodeName)) {
        doc.querySelectorAll(nodeName).forEach((node) => {
            node.remove();
        })
    }
}
