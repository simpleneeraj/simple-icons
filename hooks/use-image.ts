import * as React from "react";
import purify from "tools/utils/purify";
import * as Mime from "tools/utils/mimeTypes"
import blobMaker from "tools/utils/blobMaker";
import createCanvas from "tools/utils/createCanvas";
import toCapitalize from "tools/utils/toCapitalize";
import download from "tools/plugins/download";
import setAttributes from "tools/utils/setAttributes";
import { DownloadOptions, IconStateType } from "typings";
import JSZip from "jszip";



const useImageAction = (iconData: IconStateType) => {
  const { name, source } = iconData;
  const uppercase = toCapitalize(name)
  /**
   * Handler For PNG
   */

  const DownloadImage = React.useCallback(async (options: DownloadOptions) => {
    const { format, color, pixelRatio } = options;
    try {
      const { svg } = await purify(source, {
        encoding: "html",
        strokeColor: "#F78DA7",
      });
      setAdditionalAttributes(svg, {
        color: color,
        format: format,
        pixelRatio: pixelRatio
      });
      let imageSrc = `${Mime.dataImage}${encodeURIComponent(svg.outerHTML)}`;
      const canvas = await createCanvas(imageSrc, pixelRatio);
      console.log(svg);
      canvas.toBlob((blob: BlobPart | null) => {
        download(blob, `${uppercase}.${format}`);
      }, `image/${format}`);
    } catch (e) {
      console.log(e);
    }
  }, [source, uppercase]);


  /**************************
  DownloadZip with All Format
  ***************************/

  const DownloadZip = React.useCallback(async (options: DownloadOptions) => {
    const { pixelRatio } = options;
    const zip = new JSZip();
    try {
      const { svg } = await purify(source, { encoding: "html" });
      let imageSrc = `${Mime.dataImage}${encodeURIComponent(svg.outerHTML)}`;
      const canvas = await createCanvas(imageSrc, pixelRatio);
      let ZIPFILES = await readyForZIP(source, canvas) as Blob[];
      var files = zip.folder("images");
      // console.log(zips);
      for (const iterator of ZIPFILES) {
        console.log(iterator);
        files?.file(`${name}-${ZIPFILES[0].type}`, iterator,);
      }
      zip.generateAsync({ type: "blob" })
        .then(function (blob) {
          download(blob, `${uppercase}-Icons.zip`);
        });
    } catch (e) {
      console.log(e);
    }
  }, [name, source, uppercase]);

  return {
    DownloadImage,
    DownloadZip,
  };
};

export default useImageAction;

const setAdditionalAttributes = (
  element: HTMLElement,
  options: DownloadOptions
) => {
  let { color } = options;
  let attributes = Array.from(new Set(element.attributes));
  for (let att of attributes) {
    const attName = att.nodeName;
    const attValue = att.nodeValue;
    let defaultAtt = {
      fill: color,
      height: "100%",
      width: "100%",
    };
    if (typeof color === 'undefined') return
    switch (attName) {
      case "fill":
        element.setAttribute("fill", color);
        break;
      case "stroke":
        element.setAttribute("stroke", color);
      case "width":
        element.setAttribute(attName, "100%");
        break;
      case "height":
        element.setAttribute(attName, "100%");
        break;
      default:
        element.removeAttribute(attName);
        setAttributes(element, { [attName]: attValue });
        setAttributes(element, defaultAtt);
        break;
    }
  }
};

/**\
 *    let colors = {
        fill: color,
        // stroke: color,
      };
    setAttributes(svg, colors);
 */

const readyForZIP = async (iconPath: BlobPart, canvas: HTMLCanvasElement) => {
  try {
    const svgBlob = await blobMaker([iconPath], { type: Mime.typeSvg });
    console.debug(`#1 SVG Blob Generated`);
    const jsxBlob = await blobMaker([iconPath], { type: Mime.typeJsx });
    console.debug(`#2 JSX Blob Generated`);
    const tsxBlob = await blobMaker([iconPath], { type: Mime.typeTsx });
    console.debug(`#3 TSX Blob Generated`);
    const imagePngBlob = await blobMaker([canvas.toDataURL("image/png")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 PNG Image Blob Generated`);
    const imageJpegBlob = await blobMaker([canvas.toDataURL("image/jpg")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 JPEG Image Blob Generated`);
    const imageWebpBlob = await blobMaker([canvas.toDataURL("image/webp")], {
      type: Mime.typeTsx,
    });
    console.debug(`#3 WEBP Image Blob Generated`);
    const blobArr = [
      svgBlob,
      jsxBlob,
      tsxBlob,
      imagePngBlob,
      imageJpegBlob,
      imageWebpBlob,
    ];
    console.debug(`#4 Blob Array Generated`);
    // let zipBlob = await blobMaker(blobArr, { type: Mime.typeZip });
    return Promise.resolve(blobArr);
  } catch (error) {
    console.log(error);
  }
};



