import Sider from "./Sider";
import React, { Children } from "react";
import Admintop from "./Admintop";
import Lastinfo from "./LastInfo";
import Middle from "./Middle";
// import Top from './Top'
const Homepage = () => {
  return (
    <>
      <div>
        <Admintop />
        <Sider />

        {/* <Middle />
        <Lastinfo /> */}
      </div>
    </>
  );
};

export default Homepage;
