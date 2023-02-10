import { Button, Card, Checkbox, List } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Top from "../Top";
import LocalSider from "../LocalSider";
import { Link } from "react-router-dom";
import Lastinfo from "../LastInfo";
import { Router } from "next/router";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  BankOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  InsertRowRightOutlined,
} from "@ant-design/icons";

const propertieslist = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  console.log("property data", propertyDatalist);
  const router = useRouter();
  const [propertyimage, setPropertyImage] = useState("");
  const [addprop, setAddProp] = useState("");
  const [propertytype, setPropertyType] = useState("");
  console.log("type", propertytype);
  const [city, setCity] = useState("");

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
    axios
      .post("http://localhost:1998/property/filterdata", {
        propertytype,
      })
      .then((res) => {
        // console.log("property111", res?.data?.propertyData);
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

  useEffect(() => {
    GetPropList();
  }, []);

  const GetPropList = async () => {
    await axios
      .get(`http://localhost:1998/handleprop/newaddprop`)
      .then((res) => {
        setAddProp(res?.data?.PropListData);
        // console.log("prop list", res?.data?.PropListData);
      });
  };

  const onChange = (checkedValues) => {
    const propertytype = checkedValues;
    // console.log("checked value", checkedValues);

    if (checkedValues != "") {
      console.log("enter");
      axios
        .post("http://localhost:1998/property/filterdata", {
          propertytype,
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
    } else {
      console.log("fffff");
      axios
        .post("http://localhost:1998/property/filterdata", {})
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
    }
  };

  // const searchEndpoint = (propertytype) =>
  //   `http://localhost:1998/property/filterdata`;

  function onSearchChange(event) {
    const city = event.target.value;
    setCity(city);
    if (city.length) {
      axios
        .post("http://localhost:1998/property/filterdata", {
          city,
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
    } else {
      axios
        .post("http://localhost:1998/property/filterdata", {})
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
    }
    [];
  }

  const plainOptions = [];
  console.log("plain", plainOptions);
  for (let i = 0; i < addprop.length; i++) {
    plainOptions.push({
      label: addprop[i].propertyList,
      value: addprop[i].propertyList,
    });
  }

  // const onhandle = async (_id) => {
  //   // console.log("hdghja");
  //   console.log(_id);

  //   await axios
  //     .get(`http://localhost:1998/property/property/${_id}`, {})
  //     .then((res) => {
  //       console.log("res",res)
  //     });
  // };

  return (
    <>
      <Top />
      <div className="container-fluid">
        <img
          src="/www.jpg"
          className="img-fluid"
          alt="Responsive image"
          width={1400}
          // style={{ marginLeft: "20px" }}
        />

        <div style={{ marginLeft: "29%", marginTop: "-25%" }}>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "50px",
              marginLeft: "-180px",
            }}
          >
            Explore different ways to Buy your home
          </h1>
          <p className="lead" style={{ marginLeft: "90px", color: "white" }}>
            Get your home's value and see buying options
          </p>
          <div className="input-group" style={{ width: "60%" }}>
            <input
              type="search"
              className="btn btn-light btn-rounded"
              value={city}
              placeholder="Search"
              aria-label="Search"
              onChange={onSearchChange}
              aria-describedby="search-addon"
              style={{ height: "60px", width: "80%" }}
            />
            <button type="button" className="btn btn-primary btn-rounded">
              search
            </button>
          </div>
        </div>
        <div style={{ display: "", marginTop: "15%" }}>
          <div style={{ marginTop: "30px" }}>
            <nav
              id="sidebarMenu"
              className="collapse d-lg-block sidebar collapse bg-white"
            >
              <div style={{ display: "flex" }}>
                <MDBDropdown>
                  <MDBDropdownToggle>Property Type</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Checkbox.Group
                      className="ant-checkbox-group-item"
                      options={plainOptions}
                      onChange={onChange}
                    />
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown style={{ marginLeft: "20px" }}>
                  <MDBDropdownToggle>Beds</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <a href="#" style={{ fontSize: "20px" }}>
                      <HomeOutlined></HomeOutlined>
                    </a>

                    <br />
                    <a href="#" style={{ fontSize: "20px" }}>
                      <BankOutlined />
                    </a>
                    <br />
                    <a href="#" style={{ fontSize: "20px" }}>
                      <EnvironmentOutlined />
                    </a>
                    <br />
                    <a href="#" style={{ fontSize: "20px" }}>
                      <InsertRowRightOutlined />
                    </a>
                  </MDBDropdownMenu>
                </MDBDropdown>
                {/* <MDBDropdown style={{ marginLeft: "20px" }}>
                  <MDBDropdownToggle>Beds</MDBDropdownToggle>
                  <MDBDropdownMenu></MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown style={{ marginLeft: "20px" }}>
                  <MDBDropdownToggle>Beds</MDBDropdownToggle>
                  <MDBDropdownMenu></MDBDropdownMenu>
                </MDBDropdown> */}
              </div>
            </nav>
          </div>

          <div
            style={{
              marginTop: "30px",
              alignItems: "center",
              backgroundColor: "",

              // display: "flex",
              // marginLeft: "20px",
            }}
          >
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
                      // onClick={() =>
                      //   router.push(`/components/propertyitem/${record._id}`)
                      // }
                      onClick={() => {
                        {
                          console.log("idddd", record._id);
                        }
                        router.push({
                          pathname: `/components/propertyitem`,
                          query: {
                            _id: record?._id,
                            propertyname: record?.propertyname,
                            propertyimage: record?.propertyimage,
                            propertytype: record?.propertytype,
                            city: record?.city,
                            price: record?.price,
                          },
                        });
                      }}
                      // onClick={() => {
                      //   router.push({
                      //     pathname: "/components/propertyitem",
                      //     query: { data: JSON.stringify(record._id) },
                      //   });
                      // }}
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
                      {/* <Button
                      onClick={() => {
                        propertyhandle(record);
                      }}
                    >
                      Check Details
                    </Button> */}
                    </Card>
                    {/* </Link> */}
                  </a>
                </List.Item>
              )}
            />
          </div>
        </div>
        <div>
          <Lastinfo />
        </div>
      </div>
    </>
  );
};

export default propertieslist;
