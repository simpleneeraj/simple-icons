import React from "react";
import css from "styles/header.module.scss";

const Header = () => {
  return (
    <header className={css.container}>
      <div className={css.inner}>
        <div className={css.logo}>Logo</div>
        {/* <SearchBar /> */}
        <nav className={css.nav}>
          <ul>
            <li>
              <a href="#">Sponsor</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
