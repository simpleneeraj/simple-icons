import * as React from "react";
import purify from "tools/utils/purify";
import * as Mime from "tools/utils/mimeTypes"
import blobMaker from "tools/utils/blobMaker";
import toCapitalize from "tools/utils/toCapitalize";
import download from "tools/plugins/download";
import wraperStrings from "tools/utils/wraperStrings";
import { setValue } from "tools/utils/clipboard";
import { IconStateType } from "typings";



const useJSXAction = (iconData: IconStateType) => {
    const { name, source } = iconData;
    const uppercase = toCapitalize(name)
    /**
     * Handler Javascript
     */
    const CopyJavascript = React.useCallback(async () => {
        try {
            const { svg, viewBox } = await purify(source, { encoding: "javascript" });
            let wraper = wraperStrings(
                {
                    uniqName: uppercase,
                    innerString: svg.innerHTML,
                    exportType: "named-export",
                    viewBox
                }
            );
            setValue(wraper.jsxString);
            alert('Copy Javascript code successfully')

        } catch (e) {
            console.log(e);
        }
    }, [source, uppercase]);


    const DownloadJsx = React.useCallback(async () => {
        try {
            const { svg, viewBox } = await purify(source, { encoding: "javascript" });
            let wraper = wraperStrings(
                {
                    uniqName: uppercase,
                    innerString: svg.innerHTML,
                    exportType: "named-export",
                    viewBox
                }
            );
            const blob = await blobMaker([wraper.jsxString], {
                type: Mime.typeJsx,
            });
            download(blob, `${name}.jsx`);
        } catch (e) {
            console.log(e);
        }
    }, [source, name, uppercase]);

    return { CopyJavascript, DownloadJsx };
};

export default useJSXAction;





