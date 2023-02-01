import { Layout } from "antd";
// import type { AppProps } from "next/app";
// import type {AppProps} from ".next/"

import React, { Component } from "react";
import Middle from "./Middle";
import Home from ".";
import { Content } from "antd/lib/layout/layout";
import Admintop from "./Admintop";
import Top from "./Top";
import Test from "./test";
import Homepage from "./home";

export default function PropertySite({ Component, pageProps }) {
  return <></>;
  // return <Signup />;
}

// const PropertySite = ({ isLogin, Component, pageProps }) => {
//   return (
//     <>
//       {console.log(isLogin, "isLogin login")}
//       {isLogin.isLogin ? (
//         <Layout>
//           <Admintop />

//           <Layout>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Component {...pageProps} />
//             </Layout>
//           </Layout>
//         </Layout>
//       ) : (
//         <Home />
//       )}
//     </>
//   );
// };

// export default PropertySite;
