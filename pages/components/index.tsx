import React from "react";
import Admintop from "../Admintop";
import Lastinfo from "../LastInfo";
import CompMiddle from "./CompMiddle";
import Sider from "./sider";

const index = () => {
  return (
    <>
      <div>
        <Admintop />
        <div style={{ display: "flex", background: "black" }}>
          <Sider />
          <CompMiddle />
        </div>
        <div>
          <Lastinfo />
        </div>
      </div>
    </>
  );
};

export default index;
