import { NextApiRequest, NextApiResponse } from "next"

type IconsTypes =
    "TYPES" | "COPY" | "DOWNLOAD" | "PNG" | "JPG" | "WEBP" | "ZIP";

/**************************
Paths Types
***************************/
interface PathsTypes {
    ios: string;
    remix: string;
    ionic: string;
    bootstrap: string;
    fluentFilled: string;
    fluentRegular: string;
}

type ReqType = NextApiRequest
type Restype = NextApiResponse

interface IconStateType {
    name: string;
    source: string;
}
interface TabStateType {
    name: string;
}

interface ToastType {
    isToast: boolean;
}

type both = string | number
type ImageFormat = "png" | "jpeg" | "webp";

/**************************
DownloadOptions
***************************/
interface DownloadOptions {
    format: ImageFormat
    color?: string
    pixelRatio: number
}

/**************************
PurifyOptions
***************************/
interface PurifyOptions {
    encoding?: "javascript" | "html"
    strokeColor?: any;
}

type ToastValue = true | false;

interface ParseCssTextOptions {
    cssToJs?: boolean
}

