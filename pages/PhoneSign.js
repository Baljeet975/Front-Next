import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "./context/UserAuthContext";
import { useRouter } from "next/router";
import { setUpRecaptcha } from "./context/UserAuthContext";
import { message } from "antd";
import axios from "axios";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const router = useRouter();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");

    try {
      const response = await setUpRecaptcha(number);
      axios
        .post(`http://localhost:1998/user/signup`, {
          number,
        })
        .then((res) => {
          console.log(res, "res");
        });

      setResult(response);
      setFlag(true);
      // handleSign();
    } catch (err) {
      console.log("error");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);

      router.push("/Homepage");
      message.success("Verified");
      //   navigate("/home");
    } catch (err) {
      console.log("error");
      //   setError(err.message);
    }
  };

  // const handleSign = () => {
  //   axios
  //     .post(`http://localhost:1998/user/signup`, {
  //       number,
  //     })
  //     .then((res) => {
  //       console.log(res, "res");
  //     });
  // };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3"> </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            {/* <Link to="/"> */}
            <Button variant="secondary">Cancel</Button>
            {/* </Link> */}
            {/* &nbsp; */}
            <Button
              type="submit"
              variant="primary"
              style={{ marginLeft: "10px" }}
            >
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Button variant="secondary">Cancel</Button>
            <Button
              type="submit"
              variant="primary"
              style={{ marginLeft: "10px" }}
            >
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;
