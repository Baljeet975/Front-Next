import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { Form, Input, Modal, Popover } from "antd";
import PhoneSignUp from "./PhoneSign";
import Login from "./Login";

const Top = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [basicModal, setBasicModal] = useState(false);

  const [password, setPassword] = useState("");
  // console.log("password", password);
  const [correctdata, setCorrectData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMyModalOpen, setIsMyModalOpen] = useState(false);

  const [number, setNumber] = useState();

  // useEffect(() => {
  //   dataShow();
  // }, []);

  // const dataShow = () => {
  //   axios.get("http://localhost:1998/user").then((res) => {
  //     console.log(res, "Response");
  //     console.log(res?.data?.userData, "Response");
  //     const showData = res?.data?.userData;
  //     console.log(showData);
  //     setCorrectData(showData);
  //   });
  // };

  // const logout = (e) => {
  //   e.preventDefault();
  //   console.log("Logout");
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   router.push("/IndexCopy");
  // };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showMyModal = () => {
    setIsMyModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);

    // setDisableCheckout(true);
  };
  const handleMyCancel = () => {
    setIsMyModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const Buycontent = (
    <div>
      <div>
        <a className="nav-link" href="/">
          Homes For Sale
        </a>
      </div>
      <div>
        <a className="nav-link" href="/">
          Property Records
        </a>
      </div>
    </div>
  );
  const Sellcontent = (
    <div>
      <div>
        <a className="nav-link" href="/">
          Find the right selling option for you
        </a>
      </div>
      <div>
        <a className="nav-link" href="/">
          Compare top agents with UpNest
        </a>
      </div>
    </div>
  );
  const Rentcontent = (
    <div>
      <div>
        <a className="nav-link" href="/">
          Apartments for Rent
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        title="Login"
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
      <div>
        <header className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <a
                  className="navbar-brand mt-2 mt-lg-0"
                  href="/
              "
                >
                  <img
                    src="/ebs.png"
                    height="30"
                    alt=""
                    loading="lazy"
                    style={{ marginTop: "-1%" }}
                  />
                </a>

                {/* <Popover content={Buycontent} title="Title" trigger="hover">
                <a className="nav-link" href="">
                  Buy
                </a>
              </Popover>
              <Popover content={Sellcontent} title="Title" trigger="hover">
                <a className="nav-link" href="">
                  Sell
                </a>
              </Popover>
              <Popover content={Rentcontent} title="Title" trigger="hover">
                <a className="nav-link" href="">
                  Rent
                </a>
              </Popover> */}
                <ul
                  className="nav nav-tabs mb-3"
                  id="ex1"
                  role="tablist"
                  style={{ marginTop: "10px" }}
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-1"
                      data-mdb-toggle="tab"
                      href="/components/propertieslist"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected="true"
                    >
                      Buy
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-2"
                      data-mdb-toggle="tab"
                      href="/sell/SellProp"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected="false"
                    >
                      Sell
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-3"
                      data-mdb-toggle="tab"
                      href="/components/rent"
                      role="tab"
                      aria-controls="ex1-tabs-3"
                      aria-selected="false"
                    >
                      Rent
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <MDBBtn onClick={showModal}>Login</MDBBtn>
                {/* <MDBBtn href="/test">Hello</MDBBtn> */}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Top;
