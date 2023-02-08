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
