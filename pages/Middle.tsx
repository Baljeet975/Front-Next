import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Card,
  List,
  Checkbox,
  Input,
  CheckboxValueType,
  Row,
  Col,
  Button,
} from "antd";
const { Meta } = Card;
const { Search } = Input;

const Middle = () => {
  const [propertyDatalist, setPropertyDatalist] = useState([]);
  // console.log("property data", propertyDatalist);
  const router = useRouter();
  const [propertyimage, setPropertyImage] = useState("");
  const [addprop, setAddProp] = useState("");
  const [propertytype, setPropertyType] = useState("");

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

  const onChange = (checkedValues: CheckboxValueType[]) => {
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
      // console.log("fffff");
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

  const plainOptions = [];
  // console.log("plain", plainOptions);
  for (let i = 0; i < addprop.length; i++) {
    plainOptions.push({
      label: addprop[i].propertyList,
      value: addprop[i].propertyList,
    });
  }

  const handleExplore = () => {
    router.push("/sell/SellProp");
  };

  return (
    <>
      <div className="container-fluid">
        <img
          src="/123.webp"
          className="img-fluid"
          alt="Responsive image"
          // width={1500}
        />

        <div style={{ marginLeft: "29%", marginTop: "-30%" }}>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "60px",
            }}
          >
            To each their home.
          </h1>
          <p className="lead" style={{ marginLeft: "110px", color: "white" }}>
            Let’s find a home that’s perfect for you
          </p>
          <div className="input-group" style={{ width: "60%" }}>
            <input
              type="search"
              className="btn btn-light btn-rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ height: "60px", width: "80%" }}
            />

            <button type="button" className="btn btn-primary btn-rounded">
              search
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "17%" }}>
        <div style={{ display: "flex" }}>
          <div
            className="bg-image"
            style={{
              backgroundImage: "url('1.jpg')",
              width: "20%",
              height: "200px",
              marginLeft: "50px",
            }}
          >
            <div className="text-center" style={{ marginTop: "50px" }}>
              <h1 style={{ color: "white", fontWeight: "bold" }}>3456</h1>
              <p style={{ color: "white" }}>Homes for sale</p>
            </div>
          </div>
          <div
            className="bg-image"
            style={{
              backgroundImage: "url('2.jpg')",
              width: "20%",
              marginLeft: "50px",
              height: "200px",
            }}
          >
            <div className="text-center" style={{ marginTop: "50px" }}>
              <h1 style={{ color: "white", fontWeight: "bold" }}>152</h1>
              <p style={{ color: "white" }}>Open houses</p>
            </div>
          </div>
          <div
            className="bg-image"
            style={{
              backgroundImage: "url('5.jpg')",
              width: "20%",
              marginLeft: "50px",

              height: "200px",
            }}
          >
            <div className="text-center" style={{ marginTop: "50px" }}>
              <h1 style={{ color: "white", fontWeight: "bold" }}>793</h1>
              <p style={{ color: "white" }}>Recently sold</p>
            </div>
          </div>
          <div
            className="bg-image"
            style={{
              backgroundImage: "url('7.jpg')",
              width: "20%",
              height: "200px",
              marginLeft: "50px",
            }}
          >
            <div className="text-center" style={{ marginTop: "50px" }}>
              <h1 style={{ color: "white", fontWeight: "bold" }}>97</h1>
              <p style={{ color: "white" }}>Price reduced</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "20px" }}></div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <div
              className="bg-image"
              style={{
                height: "100%",
                backgroundImage: "url('hi.jpg')",
              }}
            >
              <div
                className="card-body"
                style={{
                  fontStyle: "italic",
                  marginTop: "80px",
                }}
              >
                <h2
                  className="text-start"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  The Cities Where You’ll Save Money Renting in 2023—and the
                  Ones Where Buying a Home Is Cheaper
                </h2>
                <div
                  className="input-group"
                  style={{
                    // width: "90%",
                    marginTop: "10%",
                    // height: "50px",
                    marginLeft: "19%",
                  }}
                >
                  <input
                    type="search"
                    className="btn btn-light btn-rounded"
                    placeholder="Search Your City"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    style={{
                      height: "60px",
                      width: "40%",
                    }}
                  />

                  <button type="button" className="btn btn-primary btn-rounded">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="bg-image hover-zoom">
              <img
                src="c.jpg"
                className="img-fluid z-depth-1"
                alt="Responsive image"
                width={1000}
              />
            </div>
          </div>
        </div>
        <div className="bg-image hover-zoom">
          <img src="a.jpg" className="img-fluid" alt="Sample" width={1500} />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <h1
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "60px",
                    // width: "8rem",
                  }}
                >
                  Let’s find the selling option for you.
                </h1>
                <div style={{ marginLeft: "33%" }}>
                  <p className="text-white mb-0">
                    Get your home’s value and see selling options.
                  </p>
                </div>
                <div style={{ marginTop: "100px", marginLeft: "40%" }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-rounded"
                    onClick={handleExplore}
                    // onClick={router.push("/sell/SellProp")}
                  >
                    Start exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{ background: "white", height: "400px", display: "flex" }}
          >
            <p className="h1" style={{ marginLeft: "20px", marginTop: "40px" }}>
              Need a home loan? Get pre-approved
            </p>
            <button
              type="button"
              className="btn btn-primary btn-rounded"
              style={{
                height: "60px",
                marginTop: "15%",
                width: "330px",
              }}
            >
              Get Pre-approved now.
            </button>

            <p className="h6" style={{ marginTop: "25%", marginRight: "20px" }}>
              Find a lender who can offer competitive mortgage rates and help
              you with pre-approval.
            </p>
            <div className="bg-image hover-zoom">
              <img
                src="e.jpg"
                className="img-fluid z-depth-1"
                alt="Responsive image"
                width={1500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;

{
  /* <div
          style={{
            marginTop: "30px",
            alignItems: "center",
            display: "flex",
            marginLeft: "20px",
          }}
        >
          <List
            grid={{
              gutter: 16,
              xxl: 4,
            }}
            // style={{ margin: "20px" }}
            dataSource={propertyDatalist}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 220, height: 300 }}
                  cover={
                    <img
                      alt=""
                      height={220}
                      width={100}
                      src={`${item.propertyimage}`}
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
                    {item.propertyname}
                  </p>
                  <p
                    className="text-end"
                    style={{
                      fontSize: "10px",
                      marginTop: "-34px",
                      color: "grey",
                    }}
                  >
                    {item.propertytype}
                  </p>
                  <p className="text-start" style={{ fontSize: "10px" }}>
                    {item.city}
                  </p>

                  <p
                    className="text-end"
                    style={{
                      fontSize: "10px",
                      marginTop: "-33px",
                      fontWeight: "bolder",
                    }}
                  >
                    ${item.price}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </div> */
}
{
  /* <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-12 mb-3">
            <img
              src="a.jpg"
              className="img-fluid z-depth-1"
              alt="Responsive image"
              width={1500}
            />
          </div>
        </div> */
}
{
  /* <div className="card" style={{ backgroundColor: "" }}>
          <div className="text-center">
            <h1 style={{ color: "black", fontWeight: "bold" }}>
              What's happening in Miami, FL{" "}
            </h1>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ marginLeft: "60px" }}>
              <h1 className="text-primary">3456</h1>
              <p>Homes for sale</p>
            </div>
            <div style={{ marginLeft: "20%" }}>
              <h1 className="text-primary">1235</h1>
              <p>Open houses</p>
            </div>
            <div style={{ marginLeft: "20%" }}>
              <h1 className="text-primary">9654</h1>
              <p>Recently sold</p>
            </div>
            <div style={{ marginLeft: "20%" }}>
              <h1 className="text-primary">145</h1>
              <p>Price reduced</p>
            </div>
          </div>
        </div> */
}
