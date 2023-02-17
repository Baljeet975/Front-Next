import React, { useState, useEffect } from "react";
import Top from "../Top";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Card, List } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import { Router } from "next/router";
import { useRouter } from "next/router";
import Lastinfo from "../LastInfo";

const rent = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  console.log("list", propertyDatalist);
  const [propertytype, setPropertyType] = useState("");
  console.log("prop", propertytype);
  const router = useRouter();

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
    axios
      .post("http://localhost:1998/property/filterdata", {
        propertytype: "Rent",
      })
      .then((res) => {
        setPropertyDatalist(res?.data?.propertyData);
        for (let p = 0; p < res?.data?.propertyData.length; p++) {
          if (res?.data?.propertyData[p].image === "") {
            res.data.propertyData[p].propertyimage = "property_not_found.png";
          } else {
            res.data.propertyData[
              p
            ].propertyimage = `http://localhost:1998/images/${res.data.propertyData[p].image}`;
          }
        }
      });
  };

  return (
    <>
      <div>
        <Top />
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        ></nav>
        <h3 style={{ marginLeft: "20px" }}> Apartments and Houses for Rent</h3>

        <div>
          <List
            grid={{
              gutter: 16,
              xxl: 4,
            }}
            dataSource={propertyDatalist}
            renderItem={(record) => (
              <List.Item style={{ padding: "40px", marginLeft: "" }}>
                <a>
                  <Card
                    onClick={() => {
                      {
                        console.log("idddd", record._id);
                      }
                      router.push({
                        pathname: `/components/rentproduct`,
                        query: {
                          _id: record?._id,
                          propertyname: record?.propertyname,
                          propertyimage: record?.propertyimage,
                          propertytype: record?.propertytype,
                          city: record?.city,
                          price: record?.price,
                          bedroom: record?.bedroom,
                          bathroom: record?.bathroom,
                          status: record?.status,
                        },
                      });
                    }}
                    hoverable
                    style={{ width: 350, height: 330 }}
                    cover={
                      <img
                        alt=""
                        height={250}
                        width={140}
                        src={`${record.propertyimage}`}
                      />
                    }
                  >
                    <p
                      className="text-start"
                      style={{
                        fontSize: "15px",
                        marginTop: "-15px",
                        fontWeight: "bold",
                      }}
                    >
                      {record.propertyname}
                    </p>
                    <p
                      className="text-end"
                      style={{
                        fontSize: "10px",
                        marginTop: "-34px",
                        color: "grey",
                      }}
                    >
                      {record.propertytype}
                    </p>
                    <p className="text-start" style={{ fontSize: "10px" }}>
                      {record.city}
                    </p>

                    <p
                      className="text-end"
                      style={{
                        fontSize: "10px",
                        marginTop: "-33px",
                        fontWeight: "bolder",
                      }}
                    >
                      ${record.price}
                    </p>
                  </Card>
                </a>
              </List.Item>
            )}
          />
        </div>
        <Lastinfo />
      </div>
    </>
  );
};

export default rent;
