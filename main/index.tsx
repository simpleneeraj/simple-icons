/* eslint-disable @next/next/no-img-element */
import React from "react";
import IconBar from "layout/iconbar";
import Sidebar from "layout/sidebar";
import css from "styles/main.module.scss";
import useModel from "store/hooks/use-model";
import { IconPageProps, IconsArray } from "typings/pages";
import useIcons from "store/hooks/use-icon";

interface IconCardProps {
  name?: string;
  likes?: number;
  source?: string;
  description?: string;
  onClick: () => void;
  active?: boolean;
}

const Main = ({ iconsArray }: IconPageProps) => {
  const { modelState, openModel } = useModel();
  const { data } = useIcons();
  const { handIcon } = useIcons();
  const cardHandler = React.useCallback(
    (data: IconsArray) => {
      openModel(true);
      handIcon(data);
    },
    [handIcon, openModel]
  );

  return (
    <div className={css.main}>
      <div className={css.grid}>
        <Sidebar />
        <div className={css.center}>
          {iconsArray?.map((rest, i) => {
            return (
              <IconCard
                onClick={() => cardHandler(rest)}
                likes={100}
                key={i}
                active={rest.name === data.name}
                {...rest}
              />
            );
          })}
        </div>
        <IconBar
          onClickModel={() => openModel(false)}
          isModel={modelState.isModel}
        />
      </div>
    </div>
  );
};
export default Main;

const IconCard = (props: IconCardProps) => {
  const { name, source, description, likes, onClick, active } = props;
  return (
    <div
      style={{
        border: active ? "2px solid #8BC34A" : "",
      }}
      title={name}
      className={css.card}
      {...props}
    >
      <div className={css.image}>
        <img src={source} alt="icons" />
      </div>
      <div className={css.text}>
        {/* <h2>{name}</h2> */}
        {/* <p>{description}</p> */}
        {/* <span>{likes}</span> */}
      </div>
    </div>
  );
};
