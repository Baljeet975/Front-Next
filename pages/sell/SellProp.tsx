import React from "react";
import Top from "../Top";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Lastinfo from "../LastInfo";

const SellProp = () => {
  return (
    <>
      <Top />
      <div className="container-fluid">
        <img
          src="/qqq.jpg"
          className="img-fluid"
          alt="Responsive image"
          width={1400}
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
            Explore different ways to sell your home
          </h1>
          <p className="lead" style={{ marginLeft: "90px", color: "white" }}>
            Get your home's value and see selling options
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
        <div style={{ backgroundColor: "black", marginTop: "15%" }}>
          <p
            className="text-center"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Not ready to sell yet?
          </p>
          <p className="text-center" style={{ color: "white" }}>
            {" "}
            If you’re planning for the future our{" "}
            <a href="/guide">
              <ins>Seller Guide</ins>
            </a>{" "}
            can help.
          </p>
        </div>
        <div>
          <MDBRow>
            <MDBCol sm="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Get offers for your home</MDBCardTitle>
                  <MDBCardText>
                    Visit Seller’s Marketplace to find out how you can sell
                    without listing or stay in your home while you finance the
                    purchase of your next one.
                  </MDBCardText>
                  <MDBBtn href="#">Visit Seller`s Marketplace</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Track your home value</MDBCardTitle>
                  <MDBCardText>
                    See your RealEstimate℠ valuation information over time
                    compared to homes in your area.
                  </MDBCardText>
                  {/* <MDBBtn href="#">Go somewhere</MDBBtn> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4" style={{ marginTop: "10px" }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText>
                    <a href="/sell/sellsold" style={{ marginLeft: "25%" }}>
                      <ins>Should I sell my home now?</ins>
                    </a>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4" style={{ marginTop: "10px" }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText>
                    <a style={{ marginLeft: "25%" }} href="/sell/sellworth">
                      <ins>How much is my home worth?</ins>
                    </a>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol sm="4" style={{ marginTop: "10px" }}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText>
                    <a style={{ marginLeft: "25%" }} href="/sell/selldocs">
                      <ins>How should i sell my home?</ins>
                    </a>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
        <Lastinfo />
      </div>
    </>
  );
};

export default SellProp;
