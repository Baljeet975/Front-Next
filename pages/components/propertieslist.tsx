import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Top from "../Top";
import { Link } from "react-router-dom";
import Lastinfo from "../LastInfo";
import { Router } from "next/router";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Select, Card, Checkbox, List, Button } from "antd";

const propertieslist = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  console.log("property data", propertyDatalist);
  const router = useRouter();
  const [propertyimage, setPropertyImage] = useState("");
  const [addprop, setAddProp] = useState("");
  const [propertytype, setPropertyType] = useState("");
  const [bedroom, setBedRoom] = useState("");
  const [city, setCity] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getpropertydata();
  }, []);

  const getpropertydata = () => {
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

  const handleChange = (value: string) => {
    const bedroom = value;
    const bathroom = value;

    console.log(`selected ${value}`);
    if (value != "") {
      console.log("enter");
      axios
        .post("http://localhost:1998/property/filterdata", {
          bedroom,
          bathroom,
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

  const handlebath = (value: string) => {
    const bathroom = value;

    console.log(`selected ${value}`);
    if (value != "") {
      console.log("enter");
      axios
        .post("http://localhost:1998/property/filterdata", {
          bathroom,
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

  const handleStatus = (value: string) => {
    const status = value;
    console.log("status", status);
    if (value != "") {
      axios
        .post("http://localhost:1998/property/filterdata", {
          status,
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
                <MDBDropdown style={{ marginLeft: "50px" }}>
                  <MDBDropdownToggle style={{ width: "250px" }}>
                    Property Type
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Checkbox.Group
                      className="ant-checkbox-group-item"
                      options={plainOptions}
                      onChange={onChange}
                    />
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBDropdown style={{ marginLeft: "50px" }}>
                  <Select
                    defaultValue="Bedroom"
                    style={{ width: 200 }}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Any" },
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                    ]}
                  />
                </MDBDropdown>
                <MDBDropdown style={{ marginLeft: "50px" }}>
                  <Select
                    defaultValue="Bathroom"
                    style={{ width: 200 }}
                    // onChange={handlebath}
                    options={[
                      { value: "", label: "Any" },
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                    ]}
                  />
                </MDBDropdown>
                <MDBDropdown style={{ marginLeft: "50px" }}>
                  <Select
                    defaultValue="Status"
                    style={{ width: 200 }}
                    onChange={handleStatus}
                    options={[
                      { value: "", label: "Any" },
                      { value: "New Construction", label: "New Construction" },
                      { value: "Recently Sold", label: "Recently Sold" },
                      { value: "Existing Homes", label: "Existing Homes" },
                    ]}
                  />
                </MDBDropdown>
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
