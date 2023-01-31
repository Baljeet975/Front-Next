import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import axios from "axios";
import { useRouter } from "next/router";
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
import { Modal } from "antd";
import PhoneSignUp from "./PhoneSign";

const Login = () => {
  const [name, setName] = useState("");
  console.log("name", name);
  const [password, setPassword] = useState("");
  console.log("password", password);
  const [correctdata, setCorrectData] = useState("");
  const router = useRouter();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [isModalPhoneOpen, setIsModalPhoneOpen] = useState(false);

  // const PhoneLogin = () => {
  //   router.push("/PhoneSign");
  // };

  const showPhoneModal = () => {
    setIsModalPhoneOpen(true);
  };

  const handlePhoneOk = () => {
    setIsModalPhoneOpen(false);

    // setDisableCheckout(true);
  };

  const handlePhoneCancel = () => {
    setIsModalPhoneOpen(false);
  };

  return (
    <>
      <Modal
        title="Login With Mobile"
        open={isModalPhoneOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handlePhoneCancel}
      >
        <PhoneSignUp />
      </Modal>
      <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
        <div className="card-body p-5 text-center">
          {/* <div className="form-outline mb-4">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Name</label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="password"
              className="form-control form-control-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label">Password</label>
          </div>

          <button
            className="btn btn-primary btn-lg btn-block"
            type="submit"
            onClick={handleOk}
          >
            Login
          </button> */}
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={showPhoneModal}
          >
            Login With Mobile
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
