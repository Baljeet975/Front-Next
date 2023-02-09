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
import { Button, Form, Input, message, Modal } from "antd";

// function propertydetails() {

//   return <div>Hello {propertyId}</div>;
// }

const PropertyItem = () => {
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

  // const handleInterest = () => {
  //   const interestedIn = [];
  //   interestedIn.push(query.propertyname);
  //   console.log(interestedIn, "ggggg");
  // };

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
                <h1 className="text-center">For Sale</h1>
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
        <div>
          <MDBDropdown>
            <MDBDropdownToggle style={{ width: "100%", height: "70px" }}>
              Property Details
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ width: "100%" }}>
              <MDBDropdownItem>
                <p className="text-center">
                  Ready to escape the cold weather and move to beautifully
                  sunny, SW Florida?? This adorable 2 bedroom, 1 bathroom home
                  in the Holiday Travel Park 55+ community is ready for its new
                  owner. This unit consists of newer subfloor, laminate plank
                  floors throughout the second level, a widened hallway leading
                  to the master bedroom (to fit a wheelchair), attic exhaust fan
                  to keep the unit cool in the summer, and sump pump to feed
                  water out in heavier rains. The Florida room is raised 6 and
                  is completely tiled. This room has the opportunity to be used
                  as a flex space, or even a guest bedroom when friends come to
                  town! The 2nd bedroom could also be used as a dining room,
                  office, craft room, or additional seating area. One of the
                  BEST things about living in this community is that you OWN THE
                  LAND - no land lease fees here. Holiday Travel Park is a gated
                  community with incredible amenities, to include a beautiful
                  pool, shuffleboard, bocce ball, horseshoes, community boat
                  ramp, convenient laundry facilities throughout, and huge
                  activity center with tons of activities (such as pool tables,
                  indoor pickleball court, line dancing, card games, and more)!
                  There is also optional boat/RV storage spaces available for
                  rent. There is always something fun going on in Holiday Travel
                  Park: It is truly a community filled with the friendliest of
                  residents! ALSO INCLUDED in the LOW monthly HOA fee ($115) is
                  water, sewer, trash pickup, & grounds maintenance. This
                  location is near ocean access boat ramps & marinas, and is
                  within 10 minutes of the beautiful Englewood Beaches, cozy
                  cafes, unique gift shops, gorgeous art galleries & beautiful
                  boutiques...not to mention historic Dearborn St! Plenty of
                  outdoor activities to do in this area (such as kayaking and
                  hiking) and LOTS of beautiful Florida Wildlife to spot - come
                  check it out TODAY! Welcome to PARADISE!
                </p>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown style={{ marginTop: "30px" }}>
            <MDBDropdownToggle style={{ width: "100%", height: "70px" }}>
              Open Houses
            </MDBDropdownToggle>
            <MDBDropdownMenu style={{ width: "100%" }}>
              <MDBDropdownItem>
                <p className="text-center">
                  Contact agent for a private showing.
                </p>
                <button
                  className="btn btn-primary btn-rounded"
                  type="submit"
                  style={{ marginTop: "5px", marginLeft: "42%" }}
                >
                  Request a private Showing.
                </button>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>

        <div>
          <Lastinfo />
        </div>
      </div>
    </>
  );
};
export default PropertyItem;
