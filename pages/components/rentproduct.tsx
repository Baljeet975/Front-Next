import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Top from "../Top";
import Lastinfo from "../LastInfo";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button, Card, Form, Input, message, Modal } from "antd";

// function propertydetails() {

//   return <div>Hello {propertyId}</div>;
// }

const RentProduct = () => {
  const router = useRouter();
  const { query } = router;
  const [buyername, setBuyerName] = useState("");
  const [buyeremail, setBuyerEmail] = useState("");
  const [buyerphonenumber, setBuyerPhoneNumber] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  console.log(interestedIn, "int");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [flag, setFlag] = useState(false);

  function BuyerInfo() {
    try {
      let data = {
        buyername,
        buyeremail,
        buyerphonenumber,
        interestedIn,
      };

      fetch(`http://localhost:1998/buyerinfo`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((Buyer) => {
        message.success("submit");
        console.log("result", Buyer);
      });
      // router.push("/components/propertieslist");
    } catch (error) {
      message.error("error");
      // if (
      //   buyername === "" ||
      //   buyeremail === "" ||
      //   buyerphonenumber === "" ||
      //   interestedin === "" ||

      // ) {
      //   message.error("Please fill given fields")
      // } else {
      //   message.error("Your Info doesn`t submit");
      // }
    }
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    // setDisableCheckout(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Submit Your Info"
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        <div className="p-4 box">
          <h2 className="mb-3"> </h2>
          <Form
            // onSubmit={BuyerInfo}
            style={{ display: !flag ? "block" : "none" }}
          >
            <Form.Item className="mb-3">
              <Input
                onChange={(e) => {
                  setBuyerName(e.target.value);
                }}
                placeholder="enter your name"
              />
            </Form.Item>
            <Form.Item className="mb-3">
              <Input
                onChange={(e) => {
                  setBuyerEmail(e.target.value);
                }}
                placeholder="enter your email"
              />
            </Form.Item>

            <Form.Item className="mb-3">
              <Input
                onChange={(e) => {
                  setBuyerPhoneNumber(e.target.value);
                }}
                placeholder="enter your number"
              />
            </Form.Item>
            <Form.Item className="mb-3">
              <Input
                value={query.propertyname}
                onChange={(e) => {
                  setInterestedIn(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button style={{ marginLeft: "10px" }} onClick={BuyerInfo}>
                Submit Info
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="container-fluid">
        <Top />
        <div style={{ display: "flex" }}>
          <div
            className="container"
            style={{
              width: "60%",
              margin: "2 rem auto",
              marginTop: "20px",
              // marginLeft: "-4px",
              // backgroundColor: "grey",
              marginLeft: "-1px",
              // marginRight: "-5px",
            }}
          >
            <div
              className="gallery"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8,1fr)",
                gridTemplateRows: "repeat(8,5vw)",
                gridGap: "1.5rem",
              }}
            >
              <figure
                className="gallery__item gallery__item--1"
                style={{
                  gridColumnStart: "1",
                  gridColumnEnd: "3",
                  gridRowStart: "1",
                  gridRowEnd: "3",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <figure
                className="gallery__item gallery__item--2"
                style={{
                  gridColumnStart: "3",
                  gridColumnEnd: "5",
                  gridRowStart: "1",
                  gridRowEnd: "3",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <figure
                className="gallery__item gallery__item--3"
                style={{
                  gridColumnStart: "5",
                  gridColumnEnd: "9",
                  gridRowStart: "1",
                  gridRowEnd: "6",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <figure
                className="gallery__item gallery__item--4"
                style={{
                  gridColumnStart: "1",
                  gridColumnEnd: "5",
                  gridRowStart: "3",
                  gridRowEnd: "6",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 4"
                  className="gallery__img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <figure
                className="gallery__item gallery__item--5"
                style={{
                  gridColumnStart: "1",
                  gridColumnEnd: "5",
                  gridRowStart: "6",
                  gridRowEnd: "9",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 5"
                  className="gallery__img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
              <figure
                className="gallery__item gallery__item--6"
                style={{
                  gridColumnStart: "5",
                  gridColumnEnd: "9",
                  gridRowStart: "6",
                  gridRowEnd: "9",
                }}
              >
                <img
                  src={`${query.propertyimage}`}
                  alt="Gallery image 6"
                  className="gallery__img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </figure>
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "blue",
              marginRight: "12px",
              width: "500px",
              marginTop: "20px",
            }}
          >
            <div>
              <div>
                <h1 className="text-center">For Rent</h1>
                <p className="text-center"> {query.propertyname}</p>
                <p className="text-center">${query.price}</p>
                <div
                  className=""
                  style={{ display: "flex", marginLeft: "70px" }}
                >
                  <p style={{ marginLeft: "20px" }}>2 Bed</p>
                  <p style={{ marginLeft: "50px" }}>2 Bath</p>
                  <p style={{ marginLeft: "50px" }}>400 sqft</p>
                  <p style={{ marginLeft: "50px" }}>1600 sqft</p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-rounded"
                  style={{ width: "300px", marginLeft: "110px" }}
                  onClick={showModal}
                >
                  Contact With Us
                </button>
                <h3
                  className="text-center"
                  style={{
                    marginTop: "20px",
                  }}
                >
                  Drop Your Info here
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Card title="Property details">
            <Card
              type="inner"
              title="Property Type"
              extra={<a href="#">More</a>}
            >
              <p>{query.propertytype}</p>
            </Card>
            <Card title="Features">
              <Card
                type="inner"
                title="Community Features"
                extra={<a href="#">More</a>}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <p>Parking</p>
                    <p>Pool</p>
                    <p>Garage</p>
                  </div>
                  <div style={{ marginLeft: "40%" }}>
                    <p>E-payments</p>
                    <p>Online portal</p>
                  </div>
                </div>
              </Card>
            </Card>

            <Card
              type="inner"
              title="Unit Features"
              extra={<a href="#">More</a>}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <p>Dishwasher</p>
                  <p>Fireplace</p>
                  <p>Garbage disposal</p>
                  <p>Granite counters</p>
                  <p>In unit laundry</p>
                </div>
                <div style={{ marginLeft: "40%" }}>
                  <p>Oven</p>
                  <p>Patio / balcony</p>
                  <p>Range</p>
                  <p>Refrigerator</p>
                  <p>Recently renovated</p>
                </div>
              </div>
            </Card>
          </Card>
        </div>

        <div>
          <Lastinfo />
        </div>
      </div>
    </>
  );
};
export default RentProduct;
