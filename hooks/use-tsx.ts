import * as React from "react";
import purify from "tools/utils/purify";
import * as Mime from "tools/utils/mimeTypes"
import blobMaker from "tools/utils/blobMaker";
import toCapitalize from "tools/utils/toCapitalize";
import download from "tools/plugins/download";
import wraperStrings from "tools/utils/wraperStrings";
import { setValue } from "tools/utils/clipboard";
import { IconStateType } from "typings";


const useTSXAction = (iconData: IconStateType) => {
    const { name, source } = iconData;
    const uppercase = toCapitalize(name)

    /**
     * Handler Typescript Interface
     */
    const CopyInterface = React.useCallback(async () => {
        try {
            let wraper = wraperStrings({});
            setValue(wraper.interfaceString);
            alert('Copy Typescript Interface successfully')
        } catch (e) {
            console.log(e);
        }
    }, []);

    /**
    * Handler Typescript
    */
    const CopyTypescript = React.useCallback(async () => {
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
            setValue(wraper.tsxString);
            alert('Copy Typescript Code successfully')

        } catch (e) {
            console.log(e);
        }
    }, [source, uppercase]);


    const DownloadTsx = React.useCallback(async () => {
        try {
            const { svg, viewBox } = await purify(source, { encoding: "javascript" });
            // let wraper = wraperStrings(uppercase, svg.innerHTML, "default-export");
            let wraper = wraperStrings(
                {
                    uniqName: uppercase,
                    innerString: svg.innerHTML,
                    exportType: "named-export",
                    viewBox
                }
            );
            const blob = await blobMaker([wraper.tsxFileString], {
                type: Mime.typeTsx,
            });
            download(blob, `${uppercase}.tsx`);
        } catch (e) {
            console.log(e);
        }
    }, [source, uppercase]);




    return {
        CopyInterface,
        CopyTypescript,
        DownloadTsx,
    };
};

export default useTSXAction;





