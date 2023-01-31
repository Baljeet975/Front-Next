// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;
// import Layout from '../components/Layout'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../pages/Login";
import jwt_decode from "jwt-decode";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Top from "./Top";
// import Sider from "./Sider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const isLogin = localStorage.getItem("access_token1");
    if (isLogin) {
      console.log(localStorage.getItem("access_token1"), "login token");
      const tokenCheck = localStorage.getItem("access_token1");
      // var decoded = jwt_decode(tokenCheck);
      // console.log("decoded", decoded.result)

      //   if (tokenCheck === "undefined") {
      //     setIsLogin(true)
      //   } else if (decoded.result.role === 'admin') {
      //     setIsLogin(false)
      //   }

      // } else if (!isLogin) {

      //   setIsLogin(true)
      //   console.warn("no token")
    }
  }, []);

  return (
    <div className="container-fluid">
      {/* {isLogin ? (
        <> */}
      <Layout>
        {/* <Top /> */}
        <Layout>
          {/* <MySider /> */}
          {/* <Sider /> */}
          <Layout>
            <Content>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </Layout>
      </Layout>

      <Layout></Layout>
    </div>
    // ) : (

    //   <Component {...pageProps} />

    // )}

    // </div>
  );
}
