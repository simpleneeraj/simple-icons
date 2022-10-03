/* eslint-disable @next/next/no-img-element */
import React from "react";
import SvgIcon from "icon/SvgIcon";
import CloseOutline from "icon/Close";
import ImageIcon from "icon/ImageIcon";
import useTSXAction from "hooks/use-tsx";
import useIcons from "store/hooks/use-icon";
import css from "styles/sidebar.module.scss";
import JavascriptIcon from "icon/JavascriptIcon";
import TypescriptIcon from "icon/TypescriptIcon";
import CodeDownload from "icon/CodeDownload";
import Copy from "icon/Copy";
import DocumentText from "icon/DocumentText";
import useImageAction from "hooks/use-image";

interface IconBarProps {
  isModel: boolean;
  onClickModel: () => void;
}
const IconBar = ({ isModel, onClickModel }: IconBarProps) => {
  const { data } = useIcons();
  const { CopyInterface, DownloadTsx, CopyTypescript } = useTSXAction(data);

  const { DownloadZip } = useImageAction(data);
  return (
    <React.Fragment>
      {isModel ? (
        <div className={css.container}>
          <div className={css.content}>
            <div className={css.header}>
              <div className={css.image}>
                <label>
                  <img src={data.source} alt={data.name} />
                  {data.name}
                </label>
              </div>
              <button onClick={onClickModel}>
                <CloseOutline size={20} color="#ddd" />
              </button>
            </div>
            <Wraper
              icon={<TypescriptIcon />}
              label={"TYPESCRIPT"}
              onCopy={CopyTypescript}
              onDownload={DownloadTsx}
              onCopyInterface={CopyInterface}
              interfaceButton={true}
            />

            <Wraper icon={<JavascriptIcon />} label={"JAVASCRIPT"} />
            <Wraper icon={<SvgIcon />} label={"SVG"} />
          </div>
          <div className={css.content}>
            <Wraper icon={<ImageIcon />} label={"IMAGE"} />
          </div>
          <div className={css.content}>
            <div className={css.controls}>
              <button
                onClick={() =>
                  DownloadZip({ pixelRatio: 1, format: "png", color: "red" })
                }
              >
                Download as Zip
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default IconBar;

interface WraperProps {
  label: string;
  onCopy?: () => void;
  onDownload?: () => void;
  onCopyInterface?: () => void;
  icon: React.ReactNode | React.ReactNode[];
  interfaceButton?: boolean;
}
const Wraper = ({
  icon,
  label,
  onCopy,
  onDownload,
  interfaceButton,
  onCopyInterface,
}: WraperProps) => {
  return (
    <div className={css.wraper}>
      <div className={css.label}>
        {icon}
        <label>{label}</label>
      </div>
      <div className={css.segment}>
        <button title={`Download ${label}`} onClick={onDownload}>
          <CodeDownload size={20} />
        </button>
        <button title={`Copy ${label}`} onClick={onCopy}>
          <Copy size={20} />
        </button>
        {interfaceButton && (
          <button title={`Copy Icon Props`} onClick={onCopyInterface}>
            {/* <CopyOutline size={20} /> */}
            <DocumentText size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
