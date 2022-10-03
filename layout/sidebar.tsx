import React from "react";
import Link from "next/link";
import DashBoard from "icon/Dashboard";
import { SVGICONPROPS } from "typings/icon";
import css from "styles/sidebar.module.scss";
import { BookmarkFill } from "icon/BookmarkFill";
import { FlameFill } from "icon/FlameFill";
import { Apps } from "icon/Apps";

const Sidebar = () => {
  return (
    <aside className={css.container}>
      <div className={css.content}>
        <ul>
          {sidebarLinks.slice(0, 3).map((data, index) => (
            <li key={index}>
              <i>{<data.icon size={20} />}</i>
              <Link href={data.href}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.content}>
        <ul>
          {sidebarLinks.slice(3).map((data, index) => (
            <li key={index}>
              <i>{<data.icon size={20} />}</i>
              <Link href={`/${data.href}/outline`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;

const sidebarLinks = [
  {
    name: "All Icons",
    href: "all-icons",
    icon: (props: SVGICONPROPS) => <Apps {...props} size={18} />,
  },
  {
    name: "Popular",
    href: "popular",
    icon: (props: SVGICONPROPS) => <FlameFill {...props} />,
  },
  {
    name: "Favorites",
    href: "favorites",
    icon: (props: SVGICONPROPS) => <BookmarkFill {...props} />,
  },
  {
    name: "Ionic",
    href: "ionic",
    icon: (props: SVGICONPROPS) => <DashBoard {...props} />,
  },
  {
    name: "Remix",
    href: "remix",
    icon: (props: SVGICONPROPS) => <DashBoard {...props} />,
  },
  {
    name: "Apple SF Pro",
    href: "ios",
    icon: (props: SVGICONPROPS) => <DashBoard {...props} />,
  },
  {
    name: "Font Awesome",
    href: "awesome",
    icon: (props: SVGICONPROPS) => <DashBoard {...props} />,
  },
  {
    name: "Microsoft Fluent",
    href: "fluent",
    icon: (props: SVGICONPROPS) => <DashBoard {...props} />,
  },
];
