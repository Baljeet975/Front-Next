// import '../styles/globals.css'
import React, { Component } from "react";

import type { AppProps } from "next/app";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;
// import Layout from '../components/Layout'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "./Login";
import jwt_decode from "jwt-decode";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Top from "./Top";
import PropertySite from "./PropertySite";
import Home from ".";

export default function App({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const isLogin = localStorage.getItem("access_token1");
    if (isLogin) {
      console.log(localStorage.getItem("access_token1"), "login token");
      const tokenCheck = localStorage.getItem("access_token1") ? true : false;
      console.log(tokenCheck);
      setIsLogin(tokenCheck);
    }
  }, []);
  return (
    <>
      {isLogin ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Home />
      )}
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
    </>
  );
}

// return (
//   <>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </>
// );
// <PropertySite />

// <div className="container-fluid">
//   {/* {isLogin ? (
//     <> */}
//   <Layout>
//     {/* <Top /> */}
//     <Layout>
//       {/* <MySider /> */}
//       {/* <Sider /> */}
//       <Layout>
//         <Content>
//           <Component {...pageProps} />
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>
// </div>
// ) : (

//   <Component {...pageProps} />

// )}

// </div>
// }
