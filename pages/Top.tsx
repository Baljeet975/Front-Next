import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";

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
import { Modal } from "antd";
import PhoneSignUp from "./PhoneSign";
import Login from "./Login";

const Top = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [basicModal, setBasicModal] = useState(false);

  const [password, setPassword] = useState("");
  console.log("password", password);
  const [correctdata, setCorrectData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dataShow();
  }, []);

  const dataShow = () => {
    axios.get("http://localhost:1998/user").then((res) => {
      console.log(res, "Response");
      console.log(res?.data?.userData, "Response");
      const showData = res?.data?.userData;
      console.log(showData);
      setCorrectData(showData);
    });
  };

  const handleLogOk = async (e) => {
    console.warn("going forward");
    e.preventDefault();
    const show = { name, password };
    console.log(show, "Show");

    const { data } = await axios.post(`http://localhost:1998/user/login`, {
      name,
      password,
    });

    console.log(data, "dataaaa");
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["token"]}`;
    localStorage.setItem("access_token1", JSON.stringify(data.token));
    console.log(localStorage, "localStorage");
    router.push("/Homepage");
  };

  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
    localStorage.clear();
    sessionStorage.clear();
    router.push("/IndexCopy");
  };

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
        title="Login"
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <MDBBtn onClick={showModal}>Login</MDBBtn>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Top;
