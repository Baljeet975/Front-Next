import React, { useState, useEffect } from "react";
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
  const [correctData, setCorrectData] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");

    try {
      const response = await setUpRecaptcha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    dataShow();
  }, []);
  const dataShow = () => {
    axios.get(`http://localhost:1998/user`).then((res) => {
      console.log(res, "Response");
      console.log(res?.data?.userData, "Response");
      const showData = res?.data?.userData;
      console.log(showData);
      setCorrectData(showData);
    });
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      if (number.length >= 1) {
        const show = { number };
        console.log(show, "Show");

        const { data } = await axios.post(`http://localhost:1998/user/login`, {
          number,
        });

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data["token"]}`;
        localStorage.setItem("access_token1", JSON.stringify(data.token));
        console.log(localStorage, "localStorage");
        message.success("Verified");
        router.push("/components");
      } else {
        axios
          .post(`http://localhost:1998/user/login`, {
            number,
          })
          .then((res) => {
            console.log(res, "res");
          });
      }
    } catch (err) {}
    // message.error("Try Again");
    // router.back("/Home");

    //   setError(err.message);
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
            <Button variant="secondary">Cancel</Button>
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
