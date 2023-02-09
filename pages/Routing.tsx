import React from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/edit/:_id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default Routing;
