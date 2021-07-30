import React from "react";
import Menu from "./Menu";

const BaseLayout = (props) => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default BaseLayout;
