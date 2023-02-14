import Admintop from "@/pages/Admintop";
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBFile,
} from "mdb-react-ui-kit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const profile = () => {
  const [name, setName] = useState("");
  console.log("name", name);
  const [fatherName, setFatherName] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState("");

  const handleprofile = async () => {
    const token = localStorage.getItem("access_token1");
    var decoded = jwtDecode(token);

    await axios
      .put(`http://localhost:1998/user/${decoded._id}`, {
        name,
        permanentAddress,
        email,
        fatherName,
      })
      .then((res) => {
        // setUserData
        console.log("res", res);
      });
  };

  useEffect(() => {
    getprofile();
  }, []);

  const getprofile = async () => {
    const token = localStorage.getItem("access_token1");
    var decoded = jwtDecode(token);
    await axios.get(`http://localhost:1998/user/${decoded._id}`).then((res) => {
      setUserData(res?.data?.MyUser[0]);
      console.log("a", res?.data?.MyUser[0]);
    });
  };
  return (
    <>
      <Admintop />
      <div>
        <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div
                      className="col-md-4 gradient-custom text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar"
                        className="img-fluid my-5"
                        style={{ width: "80px" }}
                      />

                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Name</h6>
                            <p className="text-muted">{userData?.name}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">{userData?.number}</p>
                          </div>
                        </div>
                        <h6>Address</h6>
                        <p>{userData?.permanentAddress}</p>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{userData?.email}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start">
                          <a href="#!">
                            <i className="fab fa-facebook-f fa-lg me-3"></i>
                          </a>
                          <a href="#!">
                            <i className="fab fa-twitter fa-lg me-3"></i>
                          </a>
                          <a href="#!">
                            <i className="fab fa-instagram fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="text-center">Your's Profile</MDBCardTitle>
            <br />
            <MDBInput
              label="name"
              id="name"
              type="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <MDBInput
              label="Father's Name"
              id="fathername"
              type="fathername"
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />
            <br />
            <MDBInput
              label="Email"
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />

            <MDBInput
              label="Permanent Address"
              id="permanentAddress"
              type="permanentAddress"
              onChange={(e) => {
                setPermanentAddress(e.target.value);
              }}
            />
            <br />

            <MDBBtn onClick={handleprofile}>Update Profile</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default profile;
