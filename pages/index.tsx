import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Lastinfo from "./LastInfo";
import Middle from "./Middle";
import Top from "./Top";
import App from "./_app";
// import Sider from "./Sider";
import Sider from "./components/sider";
import LocalSider from "./LocalSider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [propertydata, setPropertyData] = useState("");
  const [citydata, setCityData] = useState("");

  return (
    <>
      <div>
        <div>
          <Top />
          <div
            style={
              {
                // display: "flex",
              }
            }
          >
            {/* <LocalSider /> */}
            <Middle />
          </div>
        </div>

        <Lastinfo />
      </div>
    </>
  );
}
