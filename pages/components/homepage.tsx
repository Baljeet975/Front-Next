import React from "react";
import Top from "../Top";
import Lastinfo from "../LastInfo";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";

const homepage = () => {
  return (
    <>
      <div className="container-fluid">
        <Top />
        <div style={{ display: "flex" }}>
          <div
            className="container"
            style={{
              width: "60%",
              margin: "2 rem auto",
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
                  src="/1.jpg"
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
                  src="/2.jpg"
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
                  src="/111.jpg"
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
                  src="/4.jpg"
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
                  src="/111.jpg"
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
                  src="/6.jpg"
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
              // backgroundColor: "red",
              marginRight: "12px",
              width: "500px",
            }}
          >
            <div>
              <h1 className="text-center">For Sale</h1>
              <p className="text-center">$120,000</p>
              <p className="text-center">
                1475 Flamingo Dr Lot 166, Englewood, FL 34224
              </p>
              <div className="" style={{ display: "flex", marginLeft: "70px" }}>
                <p style={{ marginLeft: "20px" }}>2 Bed</p>
                <p style={{ marginLeft: "50px" }}>2 Bath</p>
                <p style={{ marginLeft: "50px" }}>400 sqft</p>
                <p style={{ marginLeft: "50px" }}>1600 sqft</p>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-rounded"
                style={{ width: "300px", marginLeft: "110px" }}
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
              <div
                className="card"
                style={{
                  backgroundColor: "grey",
                  height: "400px",
                  marginTop: "35px",
                }}
              >
                <form style={{ marginLeft: "20px", marginTop: "30px" }}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="name">Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div
                      className="form-group col-md-6"
                      style={{ marginTop: "10px" }}
                    >
                      <label for="inputNumber4">Phone Number</label>
                      <input
                        type="phonenumber"
                        className="form-control"
                        id="inputNumber4"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginTop: "10px" }}>
                    <label for="inputEmail">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "10px" }}>
                    <label for="inputAddress">You Are Interested in:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </button>
                </form>
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
                  There's also optional boat/RV storage spaces available for
                  rent. There's always something fun going on in Holiday Travel
                  Park: it's truly a community filled with the friendliest of
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

export default homepage;

{
  /* <section
        className="h-100 gradient-custom-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7" >
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", zIndex: "1" }}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>Andy Horwitz</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
