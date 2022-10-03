import React from "react";
import css from "styles/landing.module.scss";
const WelcomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <span>#simple</span>
        <h1>Welcome to world of simple</h1>
        <p>
          Premium designed icons for use in web and desktop apps. Support for
          React Components with Typescript. Completely open source,{" "}
          <a href="https://www.simpleneeraj.com">MIT licensed.</a>
        </p>
      </div>
    </div>
  );
};
export default WelcomePage;
