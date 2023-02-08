import React from "react";

const LocalSider = () => {
  return (
    <>
      <nav id="sidebarMenu" style={{ background: "red" }}>
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4"></div>
        </div>
      </nav>
    </>
  );
};

export default LocalSider;
