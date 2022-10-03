import React from "react";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};
export default Layout;
