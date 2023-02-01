import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const CompMiddle = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <MDBCard
          style={{ height: "100px", width: "350px", marginLeft: "30px" }}
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          style={{ height: "100px", width: "350px", marginLeft: "20px" }}
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          style={{ height: "100px", width: "350px", marginLeft: "20px" }}
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default CompMiddle;
