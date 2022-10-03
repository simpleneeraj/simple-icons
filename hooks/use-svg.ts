import * as React from "react";
import purify from "tools/utils/purify";
import * as Mime from "tools/utils/mimeTypes"
import blobMaker from "tools/utils/blobMaker";
import download from "tools/plugins/download";
import { setValue } from "tools/utils/clipboard";
import { IconStateType } from "typings";


const useAction = (iconData: IconStateType) => {
    const { name, source } = iconData;
    /**
     * Handler Svg
     */
    const CopySvg = React.useCallback(async () => {
        try {
            const { svg } = await purify(source, { encoding: "javascript" });
            setValue(svg.outerHTML);
            alert('Copy Svg Code successfully')

        } catch (e) {
            console.log(e);
        }
    }, [source]);

    const DownloadSvg = React.useCallback(async () => {
        try {
            const blob = await blobMaker([source], { type: Mime.typeSvg });
            download(blob, `${name}.svg`);

        } catch (e) {
            console.log(e);
        }
    }, [source, name]);

    return { CopySvg, DownloadSvg };
};

export default useAction;







